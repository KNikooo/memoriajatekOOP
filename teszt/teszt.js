const { test } = QUnit;

QUnit.module("kepekTomb tesztelse", function () {
  let j = new Jatek();
  let kepTomb=[];
  QUnit.test("kepekTombFeltoltese létezik-e?", function (assert) {
    assert.ok(j.kepekTombFeltoltese, "Létezik");
  });

  QUnit.test("kepekTombFeltoltese függvény-e?", function (assert) {
    assert.ok(typeof j.kepekTombFeltoltese, "fvény");
  });

  QUnit.test("kepekTomb véletlenszerűen rendezett-e", function (assert) {
    let tomb = [
      "kepek/kep1.jpg",
      "kepek/kep2.jpg",
      "kepek/kep3.jpg",
      "kepek/kep4.jpg",
      "kepek/kep5.jpg",
      "kepek/kep6.jpg",
      "kepek/kep7.jpg",
      "kepek/kep8.jpg"
    ];
    assert.notEqual(kepTomb.join(","),tomb.join(','),"véletlenszerü");
  });
});

QUnit.module("allapot tesztelse", function () {
  let kepekTomb = [];
  let jatekter = new Jatekter($("article"), $(".kartya"), kepekTomb);
  /* test("allapotValtozas létezik-e?", function (assert) {
    assert.ok(jatekter.allapotValtozas, "Létezik");
  }); */

  test("allapotValtozas függvény-e?", function (assert) {
    assert.ok(typeof jatekter.allapotValtozas, "fvény");
  });

  QUnit.test("kattintáskor megváltozik- e", function (assert) {
    /* kepekTomb=[
        {elem:"kepek/kep1.jpg", allapot:true},
        {elem:"kepek/kep2.jpg", allapot:false},
        {elem:"kepek/kep3.jpg", allapot:false},
        {elem:"kepek/kep4.jpg", allapot:false},
        {elem:"kepek/kep5.jpg", allapot:false},
        {elem:"kepek/kep6.jpg", allapot:false},
        {elem:"kepek/kep7.jpg", allapot:false},
        {elem:"kepek/kep8.jpg", allapot:false}
    ]; */
    let jatekter = new Jatekter($("article"), $(".kartya"), kepekTomb);
    jatekter.kattintas(0);
    console.log(kepekTomb);
    assert.equal(kepekTomb[0].allapot, true);
    assert.equal(kepekTomb[1].allapot, false);
    assert.equal(kepekTomb[2].allapot, false);
    assert.equal(kepekTomb[3].allapot, false);
    assert.equal(kepekTomb[4].allapot, false);
    assert.equal(kepekTomb[5].allapot, false);
    assert.equal(kepekTomb[6].allapot, false);
    assert.equal(kepekTomb[7].allapot, false);

    assert.equal(jatekter.allapotValtozas(),1);
  });
});
