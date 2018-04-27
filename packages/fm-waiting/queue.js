const animation = weex.requireModule('animation');

export default function (element, steps = []) {
  return new Queue(element, steps);
};

class Queue {
  constructor (element, steps = []) {
    this.element = element;
    this.steps = steps;
    this.currStep = -1;
    this.looping = false;
  }

  start () {
    this._excuteAll();
  }

  reset () {
    this.currStep = -1;
  }

  loop () {
    this.looping = true;
    var infinite = () => {
      if (this.looping) {
        this._excuteAll(() => {
          this.reset();
          infinite();
        });
      } else {
        return;
      }
    };
    infinite();
  }

  stop () {
    this.looping = false;
  }

  _excuteAll (done) {
    const next = this._next();
    if (next) {
      this._animate(next, () => {
        setTimeout(() => {
          this._excuteAll(done);
        });
      });
    } else {
      typeof done === 'function' && done();
    }
  }

  _animate (obj, done) {
    animation.transition(this.element, obj, () => {
      typeof done === 'function' && done();
    });
  }

  _next (done) {
    if (this.currStep < this.steps.length) {
      this.currStep++;
      return this.steps[this.currStep];
    } else {
      return false;
    }
  }
}
