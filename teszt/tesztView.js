const { test } = QUnit;

QUnit.module("felület tesztelse", function () {
  let kepekTomb=[];
  let jatekter = new Jatekter($("article"), $(".kartya"), kepekTomb);
  /* let j=new Jatek();
  j.kepekTombFeltoltese(); */
     test("elem létezik-e?", function (assert) {
        for (let i = 0; i < 8; i++) {
          assert.ok(kartyaTomb[i].elem, "Létezik a div");
        }
      }); 

      /* test("elemek háttérképe", function (assert) {
        let j=new Jatek();
        let tesztAdatElem = $("article div");
       assert.equal(tesztAdatElem.attr("style"), "background-image: ../kepek/hatter.jpg;"); 
      }); */

});