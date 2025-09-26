"use strict";

(self.webpackChunk_am5 = self.webpackChunk_am5 || []).push([
  [4837],
  {
    9295: function (t, e, i) {
      i.r(e);
      i.d(e, {
        am5themes_Animated: function () {
          return AnimatedTheme;
        },
      });

      var a = i(3409);

      class AnimatedTheme extends a.Q {
        setupDefaultRules() {
          super.setupDefaultRules();

          // Component animations
          this.rule("Component").setAll({ interpolationDuration: 600 });
          
          // Hierarchy animations
          this.rule("Hierarchy").set("animationDuration", 600);
          
          // Scrollbar animations
          this.rule("Scrollbar").set("animationDuration", 600);
          
          // Tooltip animations
          this.rule("Tooltip").set("animationDuration", 300);
          
          // MapChart animations
          this.rule("MapChart").set("animationDuration", 1000);
          this.rule("MapChart").set("wheelDuration", 300);
          
          // Entity animations
          this.rule("Entity").setAll({ stateAnimationDuration: 600 });
          
          // Sprite states
          this.rule("Sprite").states.create("default", { stateAnimationDuration: 600 });
          
          // Axis tooltips
          this.rule("Tooltip", ["axis"]).setAll({ animationDuration: 200 });
          
          // WordCloud animations
          this.rule("WordCloud").set("animationDuration", 500);
          
          // Polygon animations
          this.rule("Polygon").set("animationDuration", 600);
          
          // ArcDiagram animations
          this.rule("ArcDiagram").set("animationDuration", 600);
        }
      }

      const r = AnimatedTheme;
    },
  },
  function (t) {
    var e = (9295, t((t.s = 9295))),
      i = window;

    for (var a in e) i[a] = e[a];

    e.__esModule && Object.defineProperty(i, "__esModule", { value: !0 });
  },
]);

//# sourceMappingURL=Animated.js.map
