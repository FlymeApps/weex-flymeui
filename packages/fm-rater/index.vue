<template>
  <div class="rater-wrap" ref="rater" @touchstart="raterTouchStart" @touchmove="raterTouchmove" @touchend="raterTouchend">
    <div class="rater-star-bg">
      <image :class="starClz" :src="getBgImgs"></image>
      <image :class="starClz" :src="getBgImgs"></image>
      <image :class="starClz" :src="getBgImgs"></image>
      <image :class="starClz" :src="getBgImgs"></image>
      <image :class="starClz" :src="getBgImgs"></image>
    </div>
    <div class="rater-star" :style="wraperWidth">
      <image :class="starClz" v-for="(item, index) in getImgs" :key="index" :src="item"></image>
    </div>
  </div>
</template>

<style scoped>
  .rater-wrap {
    position: relative;
    flex-direction: row;
  }

  .rater-star {
    flex-direction: row;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
  }

  .rater-star-bg {
    flex-direction: row;
  }

  .rater-star-cover {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .star {
    
  }

  .star_small {
    width: 30px;
    height: 30px;
    margin: 0 3px;
  }

  .star_big {
    width: 60px;
    height: 60px;
    margin: 0 13px;
  }

</style>

<script>
import FmIcon from '../fm-icon'
import FmImage from '../fm-image'
const dom = weex.requireModule('dom')
export default {
  components: { FmIcon, FmImage },
  props: {
    score: {
      type: Number,
      default: 5
    },
    fullScore: {
      type: Number,
      default: 10
    },
    size: {
      type: String,
      default: 'big'
    },
    theme: {
      type: String,
      default: 'normal'
    },
    canChange: {
      type: Boolean,
      default: true
    },
    canSlide: {
      type: Boolean,
      default: true
    },
    starImgs: {
      type: Array,
      default: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADw0lEQVRoQ92bO2gUURSG/zMbfCKID0yyu1j4wAdYCFopio0QS/FBbARTmF2xUFCwMBuDGMUHSnajRdRWrRXURjtBLAIaxEc1uxCTdCKYEOfITtw1u85sZu7ce2Zj6plz5sv5/ntvZgghhh++27ql3JZOjo5ItyfphuV+PJjqcYG7i73S/eMBLqQ/uMAZe+t/D8z51HoQfXZBmTdQtvhFElp8wq7OTDkXkjgnrbU88IzO7qIFYERaa1HgGp0rHgtrLQs8W+cKsLDWssC1OleQRbUWA/bUOQat5YC9dI5Bazlgb53FtRYBbqizsNYywI10FtZaBrixzqJaGwcOpLOg1uaBg+gsqLV54GA6i2ltFDiUzkJamwUOo7OQ1maBw+ksorUxYCWdBbQmHkwfhcObDLxm2QGiDqW6zM8AvFW6t9FNFn0kHlq1DJOLngC0X3uDpirIz7Hw5yFXaWYQCqkeEC4CZEzzePiZwbiETLGXCFwDx4XkATA9AtHSeB5Oc1fmHyA+QpnS0+omUN+CB5IbYVnlDK3T3F663Fc4TgedKn2a3dhT3/mf6z95PTHxvf637JvX+Znr2rx6KTXnAjVvcu2RVyVgdxVv/lx75lUZ2IVu2v3aP6+RgJtvv547r5GBq0fduPfrgHnVBhxzrgPnVStwPLkOl1ftwHK5VsurEeC/uU6fAXDD0PnxLGXsmzpqz3nwCNqE88k8yMoEvT7UdewUKFvKhrrH52KNwOlRENboeKh/ajC+UdZu1VFbCzAXUnsAeqXjgfxr8F7KFF9H7aEH2KTO1UVCj9aagA3qXAXWo3VkYBmdq9SRtY4OLKGzRq01AAvorFHrSMCyOuvROhqwpM6atI4IrKAz83mAXwDWEAjbQ++rEQ8hysAKOr+D43RWXpvOvCRMdwO4DMLycODqhxB14KA6MyYBzmG8eI1ycOrB+E7raiRaboHoWGDoCGfrCMCBdK6ZaiMgLqR3A3gQ6ANABK2VgAPoPAU4OYyVrnpN1Q+cH2MBJtLnwHwBRIsbT1xNazXghjrzMBw+XP+JI7Cu7mvhtrWwEvcB2ud7n6LWisCeOk+5X+nG7fJUp8MA+k58MHUQjNsAJXX9yRga2FtnHoY13Wni33L4XvsS/Er0gfk0iFpqwcNrHR64VucpAH0Ys/t1TdV32vm2zaDEQ4B2Vq9R0FoBuKKzuan6Qs98uO8CoR+gFVBYrUMB/9H5JRh9GLevmJ6qL/hAciXIug7CcSCc1mGBu0D0hrrt9zoWpag1ON++C0hso6xdCFrrN3DqBCPbcFVGAAAAAElFTkSuQmCC',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD6ElEQVRoQ92bO2gUURSG/zNjgg8E8YHRZHcLH/gAC0ErxUcjaCk+iGYjaKOChYKChYkRMREfWChY+NhdLdTagNpoJ4iFoCK+YDcKCnaiaMzcIzuya7LubObeuXMmMU2amXPmm/P9987OJoQEfvhGekm5Le0svZRuT9INy/28Qrqr/NvtKB2X7p8McD79wgfOlpb+98BcaJuv2H1TBnXIW0AdH95KQotP2NeZqduHJO6W1loe2NeZ/EUL4JfSWosCD9e5orG01qLAI3SuEAtrLQs8QucKsazWYsD1dE5CazHgujonoLUccF2d5bUWAW6ks7TWIsANdRbWWga4oc6yWscOHEZnSa1jBw6ls6DW8QOH0llO61iBdXSW0jpWYC2dhbSOF1hLZxmtYwM20VlCaxrKp7YT0yLbr1mYaAUBG03qMtBPzE9Mzm10DhO/Ir4yc6rXNPkOgTbYbjCW6jH4nvvr+xZfaWaQyqe7QDgGUGyaJ3MDmMHocbKl40TgEXBcyGxSzLcAmpLMxdnuyt8com3UUbxb3QRqW3CudaGC2w+iebbbi9ZjfufA20idH18P71tX3/Ge62ped3/5WnuTA/M6PnM9Mq/1jBp1gRo/uf43r0bA/io+1nMdkFdjYB96jO7XjfIaCXjs7dej5zUycPXxPvH9OlxerQEnmmuNvFoFTiLXunm1DiyXa7O8xgJcKerlUgdBztlYHh9ZHXI7B87ZqD3qg0fYJl4ucxGEfWGP1zqOccntLO7XOifgYHvA+cwnALNtXFSdGp/dbLHFRm0rwJxvW6PgPrRxQUE1HHhrKfvhUdQeVoBj1bm6+dvR2g5wvDpXkK1oHRlYQucKsQ2tIwOL6GxR6+jAMjpb0zoSsKTOtrSOBCyqsyWtowEb6cxHHNe7rzz3CkDLDfbVSKu1MbC2zsxPHXjtldemf14SpvYCzkkQpumAR1mtjYFD68z4Wf6rWed96TR1Q9WC8dWWWWpC83mAdoSGjvBsbQ4cRueaqTYC4kJqtVJ0LeQXAMZaGwGH0HkQ8KfaV2+qQeB8G83qR+YwwEcBmtToBplqbQQ8is7PHB7aWvsVR2hdy29Ib87JeF7zVQLWB55nqLUZcH2dBwH0OKliH63DkA5g4MQLmc1K8QUQtdr6yKgNHKDzM8fh9jj+LYcvz52sJjadAPEBgCYMBzfRWhu4RufyVE84qWKvrakGTjufWewxXyeildVjDLTWB/6rc2xTDYRmkFdI7yFGL4imA9BerbWAfZ3ZfeBPNV08FfdUA8FzrTMUuWcA2qWrtRbwUC6zxyX1mLIDz20sSlFrcD69SjEvczsHLoWt9Rvp4S4r+/xzWAAAAABJRU5ErkJggg==',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD7klEQVRoQ92bSYwMYRTH/6+6h9jFEmLrblssiYOEE7FcJMj0hFjCxcEFiQMJiQODiCWWOHCzXJFI92ASXLhJxEGCiG16cCBxw4GpqidVUfS0qp76vvrq1Yy+9OWr9+pX7/f/qqY6Q8jgw5Vp87y21Pb+hXR7km7o9XOqxUPed65cOyzdPxPgnkrxuQfa0lab/98Dc3XKTActr/0Jo2cWlT++kYQWn7CnM4Pa/QyD26W1Fgf2dCYif9Ni5hfSWosC1+scaCyttShwvc4BsLTWosD1OgfA0lqLAYfpnIXWYsBhOmehtRhwmM5ZaC0C3Exnaa1FgJvpLK21CHAznaW1Th04js6SWqcOHEdnSa1TB46js6TWqQKr6CyldarAKjpLaZ0qsIrOUlqnBqyjs4TWZFeLmxmYY/o1CzEWgWi1Vl3mTiY81jq2yUEEvCSujhvh8PAbIFplukG/qsd8N0ffNvhKM4PsjuIhAg4ClJrm2VwAZgaO5Ftrh4nAveDsamENQNcAGpbNyZnuyt8B3pQvd9/5exdo6ME3p892LLcTRDNMtxetx/w251qrad27V/V9Q/Ud8LkO8lr+8rXxIkfmdWDmundew4zqc4MaOLn+N69awP4u3t9zHZFXbWAfur/er5vkNRFw/7tf953XxMBBgexzHS+vxoAzzbVCXo0CZ5JrxbwaB5bLtV5eUwEOijrVwh6GdSaNx0eCuzdX7j5ronafDx5xm9iV0gUQdsZdr7SOcTHf1rVL6ZiIxeaAq6VPACaYOKmQGp/z5a6JJmobAeaO4jKH6YGJE4qqkSNeTq21h0l7GAFOVeeA0JDWZoDT1TlANqJ1YmAJnQNiE1onBhbR2aDWyYFldDamdSJgSZ1NaZ0IWFRnQ1onA9bQmcD7LRf3bAuXCLRQ476aaLfWBlbVmRlP8i5tCV6bei8J3WphB4OOgWi0CniS3VobWEHnH8TcbpVrp4jgNoJx58TxTs+QcwC2xoZO8BCiDxxD58apNgPiytSlDnJXYv4AoK21FnCfOjN+EnG71Vo7GTbVKHC+jkHu4NI+Zj4AoiHNLpCu1lrAzXRm8NO8Y21s/Ikjtq7eG9I7pYJj82WAVkYep6m1HnCYzt5U4R6xRnWfpBWwVQCj1todhfVgOg/QZFN/MioDh+nsT5XdLWn8Ww7fmjTUdgcfJWA3gHw9uI7WysC9dPaziqPWyK4TpqYame/bhbm2bV0lwuI/azS0Vgf+rXOaU42EZpDTUdoO5hMgGgNAebdWAvZ1dun+76keT3uqkeA3J491rJbTINqmqrUSsF0pbc/l7Ue09sMzE5tS0hp8a9oS16EFubbui3Fr/QIhJTxRDc56+QAAAABJRU5ErkJggg==',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD70lEQVRoQ92bS4wMURSG/1PT3eMRIR4hJMZUIx6JhYQVYVonEpbiETYWNkgsSEgsGCPiEY9YsPPYijUJunsQCwkWEkTQRaxILIhITFdPH6mmR8+o6ql769apHrOZza1z6uvz/ffWVGcICfwMFOYu8dp25j++km5P0g29fm7RPur9Tq9zjkn3TwR4oJB9+XvC5aX/PTD3Z+e7NbytT9jCAuopv5OEFp+wpzODej1IAvdKay0O7OlMhPqmxYxX0lqLAjfr3NBYWmtR4GadG8DSWosCN+vcAJbWWgzYT+cktBYD9tM5Ca3FgP10TkJrEeBWOktrLQLcSmdprUWAW+ksrXXswGF0ltQ6duAwOktqHTtwGJ0ltY4VWEVnKa1jBVbRWUrrWIFVdJbSOjZgHZ0ltKaBQnYbiBfF8JplBYE26NRl8G0AT3SubXkN02viR9MnVX5OvkmE9cYbtFFBZtzJjPu2ua40M6hSso8ScASg2DRPhp+Zgb5MzjlGBB4GVy3ZG2s13ADRxGRuznBX5h+Wha2pnHPr7ykwogcX7IUVotsEZA23Fy3HQDnDvIHyzpvmxr76jvVcD+V11ZfvIz/lwLyOzVwPz6ufUqNuUGMm1z551QKu7+JtnuugvGoD16Hb9LxulddIwO13Xo+e18jAjQKJ5zpkXo0BJ5lrlbwaBU4i16p5NQ4sl2u9vMYC3CjqFuz9THQujudHYj6QzjvnTdQe9cEjbJNKwb4Eoj1h1yutY76cyTt7la4JWGwOuGh/AmimiZv6twZ/zqxzZpmobQTYLc1bw9xx38QNBdUgGlybzn14ELWHEeBYdW4QGtLaDHCsOg8RG9E6MrCEzg1kE1pHBhbR2aDW0YFFdDandSRgSZ1NaR0JWFRnQ1pHA9bQmRiHuGPwLmodVwAsVz9Xoz2EaANr6Pwszby98drUe0noFu3dIJwAaIoKeJTdWhs4tM6MASLuTeWcM0SojQTjh/NnuJXaBRDtCA0d4SFEHziczsOm2grILXSvrpF1LdwXAPpaawGPqjOjQhb3pnqc035TDQLnl8hUP2UPMvgwQONbfUC6WmsBt9aZn6cZW0Z+xRFaV+8NabG7ywVdBSgXeJ2m1nrAfjp7U6VaX8p6f5p6UFUBDFpbLdmbBpkuEjDH1J+MysD+OvNz5ur2OP4th5/OnuB+HXccRPsApJrBdbRWBh6mc32qOJ6yyqdMTTUw3w+6FrvVjusArRxao6G1OvCQzvFNNRDaO7tL3bvAdApEUwH13VoJ+I/O9+pTpfLJuKcaCF6YM82lzrMA7VTVWgm4UuzexZb1uLOn/MLEphS1httvr+JBLMvknctha/0CpflDb98rXvEAAAAASUVORK5CYII=',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEAUlEQVRoQ92bTYgcRRiG37dncGdnEUQJETx4iIo/4EFIdiIr/h3i9qAXiUq8eMhFBQ8RDHgwm13ERPzBg7mZ5CrehOkQvUQQt8efgGCC+HPXqzLTs5vd/qRXep1Mpnu7qqu/mXUuc6n6qp6p562q6WGICbzWwsX7k2FnWheuag9P7QGT8aKufyJ5n50PTmqPPxHgXuhfSUDnWsED/3vgwTeH7oq9+q8JqBdv3N14+OJvmtDqK5zoLMKlBJKUJW2t1YETnQlubVoCuaqttSrwsM6pxtpaqwIP65wCa2utCjyscwqsrbUa8DidJ6G1GvA4nSehtRrwOJ0nobUKcJ7O2lqrAOfprK21CnCeztpaVw5cRGdNrSsHLqKzptaVAxfRWVPrSoFNdNbSulJgE521tK4U2ERnLa0rA7bRWUNr9sP2CyJyr/PHLOR+Ar5NXQECiHxn0zevD8mfKV8/c3O/vvkZgUOuB5imegJcbG7UDm8pLQL2Q/8EibeSJ03TNNHycxERwXKzFZwkIdfBDbrtdizyKcC58gNNQwXpeeTzjflOZ/sUGJ3WoOvfE8cIQO6bhilbz0Hkd8+D35gPfhmuMVbf3Z7r7bwufP736AeWmdfdmevr8zrOjh03qN2T6xvzagWcdJr6XGfk1Rp46+ia0vM6L6+lgKfvvN45r6WB0wKTz3WxvDoDnmiuDfLqFHgSuTbNq3NgvVzb5bUS4LRof9U/BvJ966tgXkeR15sHgw9c1N7x4lF0kH7ofwzwlaLtzdrJmWYreNWsz/jWzoB7YfsPAntdTGq0hgB/zrU6t7uo7QQ4+nbxUYm9Sy4mlFWDXvzY7IELX5UdwwlwtTqniG60dgJcpc7buI60Lg2soXMK7ULr0sA6OrvTujSwhs4utS4FrKmzK61LAevq7EbrUsBWOkt8vF7jF9c2+QmJh0zP1bKXEGtgU50F+KFGOZI+Nt16SNhtvwzgbQK3mICX2a2tgQvrLLJGYqkxH7xLIr7h2nh5cU+05n0I4sXi0PaXEGvgIjqPrmoeUNRtPyKxnCvyA0AZra2AC+i8TkiyqqfHrWoWuFw5fNPgr94bAr4JYjbvA7LV2go4T2cBfqxRnhv9iaO4rkB02b9T1nEW4BPZ/ey0tgLO0HmdguXGoHeaj1/aMAHMatsP/Wch/AjEHa6+MhoDj9M5WdU64iNV/C1Hvn+6GV3bXAHwGsj6MLiN1sbAIzqvU2SlMeifcrWqWau9ttq+bxM4D+LAf23MtTYGTnWuclUzNzUBB+Hi0Rg8RfJWm93aCPhfnfklISuNKHqn6lXNBO8+eVtfZt4j+JKp1mbAq/5Rr85wZn/nJxebUtkaUfjUQozag3Otzpmitf4BkKJM2iELrp0AAAAASUVORK5CYII='
      ]
    },
    starSpecialImg: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADyElEQVRoQ92bPYgTQRTH39vLhVMRRBEFCws/8AMsBK0UxUY4S/GDs7G4RgULhZN4l523G8Qz+IGF1/nRirUHaqOdIBaCHuJHr7UIp0ieTMxCXLPJzuzM25zXpNl5M7+8339uM5sglPBHRDv0tES0ID09Sk+o5wvDUOnXOI4j6flLAVZKvdOgURTt/O+BlVKbAeBjB3RLFEWfJKHFO6x1RkTSkMxM0lqLA3d0bm9aALAgrbUocErnxGRRrUWBu3VOaKW1FgVO6Zwwi2otBpyhs7jWYsC9dC5DazHgDJ3FtRYBHqCzqNYiwP10ltZaBHiAzqJaewfOqbOY1t6B8+gsqbV34Jw6i2ntFdhQZxGtvQKb6CyltVdgQ51FtPYGbKmzd61RKXWSmbe5PmZBxD0AMG5Zd56ZX1mOzRyGiO9xampq5djY2CNEPOx6gmGqx8xPFhcXjyVKY+foNEREb5qX8QYwM/85EW4fCfNfcGEYHgGAh4i4oozFuZ6Tmb8DwIk4jh8ntf/pplJqKzPPI+Im1wuQrMfMnxFxPIqiD93z9tR3qec6yWuz2fyWfpP75XXJ5Tqd115GDdyglkque+XVClgPGvZcZ+XVGlgPHNZc98trIeDO4KHJdZ68ugBu1yg713nz6gy4zFyb5NUpcBm5Ns2rc2CpXNvm1Rdwu65S6gIA3PB0+3gxiqKbLmoPvPHIO4lS6g4AnM17veF1c1EUnTMc0/NyZ8BhGH5BxHUuFpWuwcxf4zhe76K2E+B6vX4gCILnLhaUVaPVah1sNBovis7hBNizzgmjE62dAPvUOaF1pXVhYAmdE2gXWhcGFtLZmdaFgSV0dql1IWBJnV1pXQhYWGcnWhcCttT5EiI+Zea7ALDb9P9q0d3aGthUZ2Z+jYgTXcemSERnmPkKAKwyAS+yW1sD59WZmX8EQaC/PdskolYarFarrR0dHb2FiKcMoK1vQqyB8+jco6uZTPV6fT8i3s/zAKCI1lbAOXT+qb80GgTBtV5dzaImoqo+L2y1WpcRcVm/jttqbQXcT2dmfoOIx9OPOAx0henp6Y2VSuUeABzqM85KayvgDJ11V+NOV3+ZAGZdG4bhUQC4jYgbXH1kNAbupbPuahAEEz5+lkNEy5m5AQDnAaDSDW6jtTFwSuefiKgXM0tETrqa1e2ZmZntIyMjDwBgb9c1xlobAyc6++xqnzjoBwGTiDgLAKttdmsjYK0zIj4DgEYQBFd9dzULvFarralWq9cB4LSp1kbARDQJAC+J6K2LTaloDSLaBwC7iGgub63fWEwjn/Boz7UAAAAASUVORK5CYII='
    },
    starDarkImg: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD00lEQVRoQ92bO2gUURSGz78kgoogiihYWPjAB1gYdmaKFY2NEEvxQWws0qhgoaBgoYlBTMQHFqbz0Yq1AbVRCGTubrIQMEF89FrLJpjZzJEJGdhsdnZn7tw5m2Sbbe49Z765339ndiYBteHjuu7hoK3jODPS7SHdMOinlLoXfNu2PSDdv13A00vAR9Y98OTk5L5qtfojAO3o6Njf1dX1UxJafIWXdO5fguyX1rodwIHOi5sWEc3Yti2qtShwrc6hxtJaiwLX6Rwyi2otDVyrcwgsqrUYcCOd26G1GHCEzuJaSwI30llcaxHgZjpLay0C3EJnUa2lgJvpLKp15sBxdJbUOnPgmDqLaS0BHEdnMa0zBU6is5TWmQIn1FlE66yBk+gsonVmwDo6S2gN13UvAjho+jELM+cB9OjUZeZRACWduc3mMPM3jI2Nbens7HxHRKdNN1hl9T54nnduUWlmRrFYDB6d3iWizDRv0wlgIrpvWdYAAF4Gp5Q6Q0RviWhzmw7OdNsKEV2wbft9WHjFaiqlDhDRKBHtNd1duN4vIuqxbft7bd+G+q6DXC/mtVAo/K0/yZF5XaO5XpbXRka13KDWUK5X5FULOJi0BnLdMK/awMHEVZzryLymAl6F1+uWeU0NHBZYBbmOlVdjwG3Odey8GgVuU64T5dU4sGCutfKaCXBNrm8Q0ZOMbh9v2rb91ETtljcecZu4rvsCwNW445OMY+YRx3GuJZkTNdYk8G8AO00cVH0NZv7jOM4uE7WNABeLxRPM/NnEAUWuDHDSsqwvaXsYAc5S5xDQlNamgDPTuQbYiNapgSV0DqFhQOvUwBI6m9TaBHDmOpvUOhWwpM6mtE4FLKmzKa3TAuvofBvAR9/3XwI4lvS6mvYmRBs4qc7MPAmgN3xsGjwkLJVKV5j5ARFtTQKeZrfWBk6g8z8A/fl8/hEAvx6sXC7v8DzvGRFdigud5iYkDXBLnetXtRmQUuo4Eb2O8wIgjdZawDF0nmfm4I9GhxutahT49PT0hkqlcsv3/TsANjY7QbpaawG30HmKiM7Xv+KIq2swrlwu7/E87xURnYqap6u1LnAjneeDt3Szs7PD3d3d1SSAUWNd1z1LRM8B7Db1kzExcITOU8zcm8W/5UxMTGxaWFgYZObrADpqwXW0Tgxcp/M8gMFKpTJkalWjVnt8fPwQgDcArDQ3ITrAoc6ZrWqT3AbX7j7f94cAbNPZrRMBL+n8iZkH5+bmHma9qlHgSqntzPwYwOWkWicCVkr15XI5N5/PfzWxKaWt4bpuIZfLHbUsayRurf+MSjRk0AKDbwAAAABJRU5ErkJggg=='
    },
    starBgImg: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADyklEQVRoQ92bO2gUQRjH/zN7EVQEUUTBwiK3O1HBQtBKUWyEWIoPYmORRgULBQULzQPxgQ8sTOejFWsFtdFOEIuASW5271IGrQ8LTXZHNtzC5bJ3tzM7+23iNdfsfN/+9vv9Zzd7hKGETxAE++K2ruvOUrdn1A3jflLKO/G3EGKcun9ZwDMt4P3/PXC9Xq+GYRjEoI7juNVqtU4JTT7hls5jLcgxaq3LAI51Xt60AMwKIUi1JgVu1znRmFprUuAOnRNmUq2pgdt1ToBJtSYDTtO5DK3JgLvoTK41JXCazuRakwD30plaaxLgPjqTak0F3EtnUq0LB86iM6XWhQNn1JlMawrgLDqTaV0osI7OVFoXCqypM4nWRQPr6EyidWHAJjpTaM2klOcBDBXwmuUQgGHDuu8BfDNc22tZjdVqtS0A3jLGThbQYM2UVEp9AHBmWWmlFPN9P351ehtAYZqXRK8ATHieN84YUyvgfN8/FUXRG8bY5pJOzmpbpdRvzvk5z/PeJYVXTbPRaHhLS0txhgatdqcv1qhUKsODg4N+e+tUfdd7rpO8Dg0NNTuvc9e8rtNcr8hrmlR9N6j1kuu0vBoBx4vWQa5T82oMHC9cq7nulddcwGvwft03r7mBkwJl5zprXq0Bl5zrzHm1ClxGrnXzah2YMNdGeS0EOCkqpbwG4HFBT5DXhRBPbNTu++CRtYmU8jmAy1mP1zxuSghxRXNN6uE2gX8C2GnjpFJq/BJC7LJR2wpwEATHoij6bOOEutXgnB93XfdL3h5WgAvWOWG0orUt4CJ1ToCtaJ0bmELnhNiG1rmBiXS2prUNYAqdrWmdC5hSZ1ta5wIm1tmK1nmBtXVWSt3knH+MougFY+ygwX01125tDKyrs1Lq+8DAwEjy2rT1kvASgLsAtuqA59mtjYE1dP4DYMzzvIeMsagTLAiCHWEYPmWMXdCANn4IyQPcV+fOqfYCklIeBfAq4w8AxlobAffTWSn1lzEWT/VB2lS7gc/MzGxwHOcGY+wWgI29LpCp1kbAfXSerlQqZzt/4tDQFfPz83sWFxdfAjjRY52R1qbAq3SOp8o5n3BdN57qkg5gt2N93z+tlHoGYLetPxm1gbvoPM05Hyni33IWFhY2NZvNSaXUVcZYpR3cRGtt4Had46kCmBRC3Lc11R7T3quUeg3gcNsx2lqbACc6FzbVbtCte/eoUiq+wNsAaO/WWsCxzmEYfmpN9V7RU+0GPjc3t51z/gjARV2ttYCllKOO43ytVqs/bGxKeWtIKY8AOCCEmMpa6x8qYw3TezcqiQAAAABJRU5ErkJggg=='
    },
    starDarkBgImg: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD1UlEQVRoQ92bO2gUURSGzxkWySqC7EYULCx84AMsBK0UxUaIpfggNhYh4G7ubFBYwcKMCWJcfOBMdjsfrVgbUBvtBLEQNIiPXotUIsGws0dm2YF1MzOZe+fesxvTpLn3nPlyvv9mcpcg9OFLCLEvaOt53gJ3e+RuGPSzbXsq+O667g3u/n0BFkJ86kx4/38PXCqVduZyua8BaLPZ3NVoNL5xQrNPuKOz04F0uLVmBw50RsT2oUVEC57nsWrNCtytc6gxt9aswD06h8ysWrMCd+sc0nJrzQYcpXM/tGYDjtGZXWs24Cid+6E1C3CSztxaswCvojOr1izASTpza20cOI3OnFobB06pM5vWxoHT6MyptVFgGZ25tDYKLKkzi9ZGgWV05tLaGLCKzhxao23b5wFgj4FrlkMAMKJYdx4A3inuTdr2GavV6salpaVniHjSQIOBKUlEL/L5/JlQ6WDSU0R0HRGNad4PeiIiRJzu3J3RP3BCiFOI+BQANvTj4Qz0/E1E5zzPex7WXjHNcrm827KseUTcYeAB2EoS0fdWqzVSr9e/dDeN1Het5zrMa61W+9X7E07K65rLdW9eo3Ra9YBaQ7lekVcl4GDToOc6Lq/KwMHGQc11Ul4zAXc2D0yu0+RVB3C7xgDkOlVetQH3M9cyedUK3I9cy+ZVOzBXrlXzagq4Xde27csAcNfQu+MV13Xv6ai96otH2ia2bdcBoJR2veS6huu6Zck9kct1Av8AgC06Hiqixk/XdbfqqK0FWAhxDBFf63iguBpEdNzzvDdZe2gBNqxzyKhFa13AJnUOgbVonRmYQ+eQWIfWmYGZdNamtQ5gDp21aZ0JmFNnXVpnAmbWWYvWWYFVdL5qWdZL3/cfIuJBhd+rmU5rZWAFnd/7vj/adW2KExMTlyzLugkAm2TAs5zWysBpdSaiP0TkDA8P1xzHafWCCSE2A8B9RLwgAa38EpIFOI3OvVONZRJCHAWAxyk/AFDWWgk4hc7LAOAUCoXbUVONo3YcZ93i4mIVEa8BQD5p4qpaKwEn6UxEH1qt1tnejzgkdA2uhbdblvUIEU8k7FPSWhU4SudgqtOdqTZlAOPWViqV00T0AAC26fqTURo4SudgqgAwauLfcsbHx9cPDQ3NBJcqAJDrBlfRWhq4R+dlIpopFouzjuNomWrctCcnJ/f6vv8EEQ93rZHWWgW4rbPJqSbEAYUQY4g4CwAFAJA+raWAA50B4BUizhQKhVumpxoHXi6Xi5Zl3UHEi7JaSwHbtj0GAG9d1/2o41DKWqNSqRzxff/A3NxcI22tv6+JL2xDOVN/AAAAAElFTkSuQmCC'
    }
  },
  data: () => ({
    offset_left: 0,
    starCount: 5
  }),
  computed: {
    starClz() {
      let clz = ['star']
      this.size === 'big' ? clz.push('star_big') : clz.push('star_small')
      return clz
    },
    wraperWidth() {
      let { score, fullScore, size } = this
      let half_star_width = size === 'big' ? 43 : 18
      let percent = score / fullScore
      let length = score <= 0 ? 0 : percent >= 1 ? 10 : percent.toFixed(1) * 10
      length = (length === NaN) ? 0 : length
      return !length ? {
        width: 1,
        opacity: 0
      } : {
        width: length * half_star_width,
        opacity: 1
      }
    },
    getImgs() {
      let { theme } = this
      if (theme === 'normal') {
        return this.starImgs
      } else if (theme === 'special') {
        let arr = []
        for (let i = 0; i < 5; i++) {
          arr.push(this.starSpecialImg)
        }
        return arr
      } else if (theme === 'dark') {
        let arr = []
        for (let i = 0; i < 5; i++) {
          arr.push(this.starDarkImg)
        }
        return arr
      }
    },
    getBgImgs() {
      let { theme } = this
      if (theme === 'normal' || theme === 'special') {
        return this.starBgImg
      } else if (theme === 'dark') {
        return this.starDarkBgImg
      }
    }
  },
  methods: {
    raterTouchStart(e) {
      let { canChange, canSlide } = this
      if (!canChange || !canSlide) return
      this.calculateScore(e.changedTouches[0].pageX, true)
    },
    raterTouchmove(e) {
      let { canChange, canSlide } = this
      if (!canChange || !canSlide) return
      this.calculateScore(e.changedTouches[0].pageX, true)
    },
    raterTouchend(e) {
      let { canChange } = this
      if (!canChange) return
      this.calculateScore(e.changedTouches[0].pageX, true)
    },
    calculateScore(pageX, needEmit) {
      let { size, fullScore } = this
      if (weex.config.env.platform === 'Web') {
        pageX = pageX * 2 / 750 * 1080 - this.offset_left
      } else if (weex.config.env.platform === 'iOS') {
        pageX = pageX - this.offset_left
      }
      let half_star_width = size === 'big' ? 43 : 18
      let half_star_score = fullScore / 10
      let star_num = (pageX / half_star_width).toFixed(0)
      let score_percent = star_num <= 0 ? 0 : star_num >= 10 ? 10 : star_num
      this.score = score_percent * half_star_score
      needEmit && this.$emit('fmRaterScoreChanged', { score: this.score })
    }
  },
  mounted() {
      if (weex.config.env.platform !== 'Android') {
        setTimeout(() => {
          dom.getComponentRect(this.$refs.rater, option => {
            this.offset_left = option.size.left
          })
        }, 50)
      }
  }
}
</script>
