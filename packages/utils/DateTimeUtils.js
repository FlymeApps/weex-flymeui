/**
 * Flyme 日期格式化工具
 * Author: SunYanJie
 * Email: sunyanjie@meizu.com
 * date: 2017-11-23
 */
export const TYPE = {
  /**
     * 普通列表：
     *  当天："时间"
     *  本周："周几"
     *  本年：“月/日”
     *  往年：“年/月/日”
     */
  FORMAT_TYPE_NORMAL: 0,

  /**
     * 短信详情列表：
     *  当天："时间"
     *  本周："周几 时间"
     *  本年：“月/日 时间”
     *  往年：“年/月/日”
     */
  FORMAT_TYPE_MMS: 1,

  /**
     * 邮件详情列表
     *  本年：“周几 月/日 时间”
     *  往年：“年/月/日”
     */
  FORMAT_TYPE_EMAIL: 2,

  /**
     * 录音机 备忘录列表
     *  当天：“时间”
     *  本年：“月/日 时间”
     *  往年：“年/月/日”
     */
  FORMAT_TYPE_RECORDER: 3,

  /**
     * 录音机 通话录音列表
     *  当天：“时间”
     *  本年：“月/日”
     *  往年：“年/月/日”
     */
  FORMAT_TYPE_RECORDER_PHONE: 4,

  /**
     * 通话记录 列表需求
     * 本年：“月/日 时间”
     * 往年：“年/月/日”
     */
  FORMAT_TYPE_CALL_LOGS: 5,

  /**
     * 个人足迹 朋友需求
     * 当天：（时差在1小时内）mm分钟前
     *      （时差在1小时外）mm小时前
     * 昨天：“昨天”
     * 本年：“月/日”
     * 往年：“年/月/日”
     */
  FORMAT_TYPE_PERSONAL_FOOTPRINT: 6,

  /**
     * 版本日期 应用中心需求
     * 本年：“月/日”
     * 往年：“年/月/日”
     */
  FORMAT_TYPE_APP_VERSIONS: 7,

  /**
     * 日历 桌面小工具
     * 本年：“月/日”
     * 往年：“年/月”
     */
  FORMAT_TYPE_CALENDAR_APPWIDGET: 8,

  /**
     * 联系人生日
     * “年/月/日”
     */
  FORMAT_TYPE_CONTACTS_BIRTHDAY_YMD: 9,

  /**
     * 联系人生日
     * “月/日”
     */
  FORMAT_TYPE_CONTACTS_BIRTHDAY_MD: 10,

  /**
     * 通话记录 列表需求
     * 本年：“月/日; 时间”
     * 往年：“年/月/日;时间”
     */
  FORMAT_TYPE_CALL_LOGS_NEW: 11
};

// 是否闰年
Date.prototype.isLeapYear = function () {
  var year = this.getFullYear();
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
};

// 几月份多少天
Date.prototype.getMonthDays = function (month) {
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (this.isLeapYear() ? 29 : 28);
};

// 是该年的第几天
Date.prototype.getYearDay = function () {
  var month = this.getMonth();
  var days = 0;
  for (var i = 0; i < month; i++) {
    days += this.getMonthDays(i);
  }
  return days + this.getDate();
};

/**
 * 格式化输出
 * 默认格式：yyyy-MM-dd
 * yyyy     完整年
 * yyy      年，只有后两位
 * MM       月，补零
 * M        月，不补零
 * dd       日，补零
 * d        日，不补零
 * q        季度，如一，二
 * HH       24小时制，补零
 * H        24小时制，不补零
 * hh       12小时制，补零
 * h        12小时制，不补零
 * tt       上午下午
 * mm       分，补零
 * m        分，不补零
 * ss       秒，补零
 * s        秒，不补零
 * ssss     毫秒，补零
 * sss      毫秒，不补零
 */
Date.prototype.format = (function () {
  var dateReg = /y{3,4}|M{1,2}|m{1,2}|d{1,4}|H{1,2}|h{1,2}|s{1,4}|tt|q/g;
  var fnLabels = 'yyyy d dddd H m s sss'.split(' ');
  var fnNames = 'getFullYear getDate getDay getHours getMinutes getSeconds getMilliseconds'.split(' ');
  var bu0Labels = 'MM dd HH hh mm ss'.split(' ');
  var plus1 = function (m) { return m - 0 + 1; };
  var defaultStrings = {
    dddd: '周日 周一 周二 周三 周四 周五 周六'.split(' '),
    M: plus1,
    q: plus1,
    tt: function (d) {
      return d > 1 ? '下午' : '上午';
    }
  };
  var defaultFormat = 'yyyy-MM-dd';
  var formats = {
    h: function (d) {
      return d.getHours() % 12 || 12;
    },
    M: function (d) {
      return d.getMonth();
    },
    q: function (d) {
      return Math.floor(d.getMonth() / 3);
    },
    tt: function (d) {
      return d.getHours() / 12;
    },
    ssss: function (d) {
      return bu0(d.getMilliseconds(), 4);
    }
  };
  for (var f = fnLabels.length; f--;) {
    // var fl = fnLabels[f].split(':');
    (function (ff, nn) {
      formats[ff] = function (d) {
        return d[nn]();
      };
    })(fnLabels[f], fnNames[f]);
  }
  for (var b = bu0Labels.length; b--;) {
    (function (ff, fn) {
      formats[ff] = function (d) {
        return bu0(fn(d), 2);
      };
    })(bu0Labels[b], formats[bu0Labels[b].slice(0, -1)]);
  }
  function bu0 (src, num) {
    return (src + '').length < num ? ('0000' + src).slice(-num) : src;
  }
  return function (options, date) {
    date = date || this;
    options = options || {};
    var format = (typeof options === 'string') ? options
      : options.format ? options.format : defaultFormat;
    return format.replace(dateReg, function (mt) {
      var res = formats[mt](date);
      var todo = options[mt] || defaultStrings[mt];
      // var ok
      return todo ? typeof todo === 'function' ? todo(res) : todo[res] : res;
    });
  };
}());

// 日期格式
const mc_pattern_hour_minute = 'H:mm';
const mc_pattern_hour_minute_12 = 'tt h:mm';
const mc_pattern_week = 'dddd';
const mc_pattern_month_day = 'M月d日';
const mc_pattern_year_month_day = 'yyyy年M月d日';
const mc_pattern_week_hour_minute = 'dddd H:mm';
const mc_pattern_week_hour_minute_12 = 'dddd tt h:mm';
const mc_pattern_month_day_hour_minute = 'M月d日 H:mm';
const mc_pattern_month_day_hour_minute_12 = 'M月d日 tt h:mm';
const mc_pattern_year_month_day_hour_minute = 'yyyy年M月d日 H:mm';
const mc_pattern_year_month_day_hour_minute_12 = 'yyyy年M月d日 tt h:mm';
const mc_pattern_week_month_day_hour_minute = 'dddd M月d日 H:mm';
const mc_pattern_week_month_day_hour_minute_12 = 'dddd M月d日 tt h:mm';
const mc_pattern_a_hour_before = '1小时前';
const mc_pattern_hour_before = ',小时前';
const mc_pattern_a_minute_before = '1分钟前';
const mc_pattern_minute_before = ',分钟前';
const mc_pattern_today = '今天';
const mc_pattern_yesterday = '昨天';

let NowTimeLast;
let ThenTimeLast;
let NowMillisLast = 0;
let FormatTypeLast = -1;
let FormatResultLast = null;

// 一小时多少毫秒
const MILLISECONDS_OF_HOUR = 60 * 60 * 1000;

/**
 * Flyme 场景日期格式化输出
 * @param { Date | Number | String } when 比对的时间
 * @param { TYPE } type 格式化场景类型
 * @param { Boolean } is24 是否 12 小时制
 */
export function formatTimeStampString (when = new Date(), type = TYPE.FORMAT_TYPE_NORMAL, is24 = true) {
  let then;
  (when instanceof Date && (then = when)) || ((typeof when === 'number' || typeof when === 'string') && (then = new Date(when)));

  if (then && then.toString() === 'Invalid Date') {
    throw Error('Function: formatTimeStampString: Date arguments is invalid.');
  }

  let now = null;
  let nowmillis;

  const sameType = (type === FormatTypeLast);
  FormatTypeLast = type;

  let sameNowDay = false;
  if (NowTimeLast) {
    nowmillis = NowTimeLast.getTime();
    // 如果是同一天，就可以重用now对象
    if (nowmillis >= NowMillisLast && nowmillis < (NowMillisLast + 24 * 60 * 60 * 1000)) {
      sameNowDay = true;
    } else {
      sameNowDay = false;
    }
  } else {
    sameNowDay = false;
  }

  if (sameNowDay) {
    now = NowTimeLast;
  } else {
    now = new Date();
    NowTimeLast = now;
    nowmillis = now.getTime();
    NowMillisLast = nowmillis - (now.getHours() * 60 * 60 * 1000 + now.getMinutes() * 60 * 1000 + now.getSeconds() * 1000);
  }

  let sameWhenDay = false;
  if (ThenTimeLast) {
    sameWhenDay = (ThenTimeLast.getFullYear() === then.getFullYear() && ThenTimeLast.getYearDay() === then.getYearDay());
  }

  // let sameWhenMonth = false;
  // if (ThenTimeLast) {
  //   sameWhenMonth = (ThenTimeLast.getFullYear() === then.getFullYear() && ThenTimeLast.getMonth() === then.getMonth());
  // }

  ThenTimeLast = then;

  const weekStart = now.getYearDay() - now.getDay();
  const isBeforeYear = then.getFullYear() < now.getFullYear();
  const isThisYear = then.getFullYear() === now.getFullYear() && then.getYearDay() <= now.getYearDay();
  const isToday = isThisYear && (then.getYearDay() === now.getYearDay());
  const isYesterDay = isThisYear && (then.getYearDay() === now.getYearDay() - 1);
  const isThisWeek = (isThisYear && (then.getYearDay() >= weekStart && then.getYearDay() < now.getYearDay()));

  switch (type) {
    case TYPE.FORMAT_TYPE_NORMAL:
      if (isToday) {
        return is24 ? then.format(mc_pattern_hour_minute) : then.format(mc_pattern_hour_minute_12);
      } else if (isThisWeek) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_week);
        return FormatResultLast;
      } else if (isThisYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_month_day);
        return FormatResultLast;
      } else if (isBeforeYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      } else {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      }
    case TYPE.FORMAT_TYPE_MMS:
      if (isToday) {
        return is24 ? then.format(mc_pattern_hour_minute) : then.format(mc_pattern_hour_minute_12);
      } else if (isThisWeek) {
        return is24 ? then.format(mc_pattern_week_hour_minute) : then.format(mc_pattern_week_hour_minute_12);
      } else if (isThisYear) {
        return is24 ? then.format(mc_pattern_month_day_hour_minute) : then.format(mc_pattern_month_day_hour_minute_12);
      } else if (isBeforeYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      } else {
        return is24 ? then.format(mc_pattern_year_month_day_hour_minute) : then.format(mc_pattern_year_month_day_hour_minute_12);
      }
    case TYPE.FORMAT_TYPE_EMAIL:
      if (isThisYear) {
        return is24 ? then.format(mc_pattern_week_month_day_hour_minute) : then.format(mc_pattern_week_month_day_hour_minute_12);
      } else if (isBeforeYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      } else {
        return then.format(mc_pattern_year_month_day_hour_minute);
      }
    case TYPE.FORMAT_TYPE_RECORDER:
      if (isToday) {
        return is24 ? then.format(mc_pattern_hour_minute) : then.format(mc_pattern_hour_minute_12);
      } else if (isThisYear) {
        return is24 ? then.format(mc_pattern_month_day_hour_minute) : then.format(mc_pattern_month_day_hour_minute_12);
      } else if (isBeforeYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      } else {
        return is24 ? then.format(mc_pattern_year_month_day_hour_minute) : then.format(mc_pattern_year_month_day_hour_minute_12);
      }
    case TYPE.FORMAT_TYPE_RECORDER_PHONE:
      if (isToday) {
        return is24 ? then.format(mc_pattern_hour_minute) : then.format(mc_pattern_hour_minute_12);
      } else if (isThisYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_month_day);
        return FormatResultLast;
      } else if (isBeforeYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      } else {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      }
    case TYPE.FORMAT_TYPE_CALL_LOGS:
      if (isThisYear) {
        return is24 ? then.format(mc_pattern_month_day_hour_minute) : then.format(mc_pattern_month_day_hour_minute_12);
      } else if (isBeforeYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      } else {
        return is24 ? then.format(mc_pattern_year_month_day_hour_minute) : then.format(mc_pattern_year_month_day_hour_minute_12);
      }
    case TYPE.FORMAT_TYPE_PERSONAL_FOOTPRINT:
      if (isToday) {
        const offsetMilliSecounds = nowmillis - when;
        let returnValue;
        if (offsetMilliSecounds >= MILLISECONDS_OF_HOUR) {
          returnValue = Math.floor(offsetMilliSecounds / 60 / 60 / 1000);
          if (returnValue === 1) {
            return then.format(mc_pattern_a_hour_before);
          } else {
            return then.format(mc_pattern_hour_before).replace(',', returnValue);
          }
        } else {
          returnValue = Math.floor(offsetMilliSecounds / 60 / 1000);
          if (returnValue <= 1) {
            return then.format(mc_pattern_a_minute_before);
          } else {
            return then.format(mc_pattern_minute_before).replace(',', returnValue);
          }
        }
      } else if (isYesterDay) {
        return then.format(mc_pattern_yesterday);
      } else if (isThisYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      } else {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      }
    case TYPE.FORMAT_TYPE_APP_VERSIONS:
      if (sameWhenDay && sameType && FormatResultLast) {
        return FormatResultLast;
      }
      FormatResultLast = isThisYear ? then.format(mc_pattern_month_day) : then.format(mc_pattern_year_month_day);
      return FormatResultLast;
    case TYPE.FORMAT_TYPE_CALENDAR_APPWIDGET:
      if (now.getFullYear() === then.getFullYear()) {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_month_day);
        return FormatResultLast;
      } else {
        if (sameWhenDay && sameType && FormatResultLast) {
          return FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        return FormatResultLast;
      }
    case TYPE.FORMAT_TYPE_CONTACTS_BIRTHDAY_YMD:
      if (sameWhenDay && sameType && FormatResultLast) {
        return FormatResultLast;
      }
      FormatResultLast = then.format(mc_pattern_year_month_day);
      return FormatResultLast;
    case TYPE.FORMAT_TYPE_CONTACTS_BIRTHDAY_MD:
      if (sameWhenDay && sameType && FormatResultLast) {
        return FormatResultLast;
      }
      FormatResultLast = then.format(mc_pattern_month_day);
      return FormatResultLast;
    case TYPE.FORMAT_TYPE_CALL_LOGS_NEW:
      let currentDay;
      const currentTime = is24 ? then.format(mc_pattern_hour_minute) : then.format(mc_pattern_hour_minute_12);
      if (isToday) {
        currentDay = then.format(mc_pattern_today);
      } else if (isThisWeek) {
        if (sameWhenDay && sameType && FormatResultLast) {
          currentDay = FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_week);
        currentDay = FormatResultLast;
      } else if (isThisYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          currentDay = FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_month_day);
        currentDay = FormatResultLast;
      } else if (isBeforeYear) {
        if (sameWhenDay && sameType && FormatResultLast) {
          currentDay = FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        currentDay = FormatResultLast;
      } else {
        if (sameWhenDay && sameType && FormatResultLast) {
          currentDay = FormatResultLast;
        }
        FormatResultLast = then.format(mc_pattern_year_month_day);
        currentDay = FormatResultLast;
      }
      return currentDay + ';' + currentTime;
  }
  return '';
}
