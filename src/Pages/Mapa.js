import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";

const geoUrl =
"https://gist.githubusercontent.com/fernando143/d03514b9dcd48829eb04ba639bc4797c/raw/4a1377658f45974d0eb2785843340bb5dced70ac/gadm36_ARG_1.json";

const markers = [

    { markerOffset: -11, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
    { markerOffset: -11, name: "","coordinates":[-63.08066609012224,-40.86803925461311,0]},
{ markerOffset: -11, name: "","coordinates":[-63.07833645550417,-40.86781076027037,0]},
{ markerOffset: -11, name: "","coordinates":[-63.07597760545497,-40.86758948935083,0]},
{ markerOffset: -11, name: "","coordinates":[-63.07363034605325,-40.86736417461012,0]},
{ markerOffset: -11, name: "","coordinates":[-63.06988540674093,-40.86611663032473,0]},
{ markerOffset: -11, name: "","coordinates":[-63.06802078375725,-40.86467054961714,0]},
{ markerOffset: -11, name: "","coordinates":[-63.06609080606776,-40.8632217244931,0]},
{ markerOffset: -11, name: "","coordinates":[-63.06414473480918,-40.86173511332589,0]},
{ markerOffset: -11, name: "","coordinates":[-63.06220454599021,-40.86027498863012,0]},
{ markerOffset: -11, name: "","coordinates":[-63.06027684073185,-40.85880892265864,0]},
{ markerOffset: -11, name: "","coordinates":[-63.05832644542497,-40.85733749917203,0]},
{ markerOffset: -11, name: "","coordinates":[-63.05638853234655,-40.85586013362374,0]},
{ markerOffset: -11, name: "","coordinates":[-63.05445650094593,-40.85440925646686,0]},
{ markerOffset: -11, name: "","coordinates":[-63.05250871148873,-40.85293199343801,0]},
{ markerOffset: -11, name: "","coordinates":[-63.05061278420145,-40.85150706724449,0]},
{ markerOffset: -11, name: "","coordinates":[-63.0487293341408,-40.85007620101816,0]},
 { markerOffset: -11, name: "","coordinates":[-63.04685399450234,-40.8486622844511,0]},
{ markerOffset: -11, name: "","coordinates":[-63.04494799400261,-40.84721424211906,0]},
{ markerOffset: -11, name: "","coordinates":[-63.04298575949832,-40.84572976249348,0]},
{ markerOffset: -11, name: "","coordinates":[-63.04124801029587,-40.84441382703977,0]},
{ markerOffset: -11, name: "","coordinates":[-63.03931846383675,-40.84294278245264,0]},
{ markerOffset: -11, name: "","coordinates":[-63.03743869731555,-40.84152521741574,0]},
{ markerOffset: -11, name: "","coordinates":[-63.03554413369077,-40.84008852711874,0]},
{ markerOffset: -11, name: "","coordinates":[-63.0335647557915,-40.83860188452724,0]},
{ markerOffset: -11, name: "","coordinates":[-63.03156315430246,-40.83708656612595,0]},
{ markerOffset: -11, name: "","coordinates":[-63.02962944912568,-40.83557351859456,0]},
{ markerOffset: -11, name: "","coordinates":[-63.02768450348289,-40.83703361121052,0]},
{ markerOffset: -11, name: "","coordinates":[-63.02577596680279,-40.83848195601389,0]},
{ markerOffset: -11, name: "","coordinates":[-63.02385831888741,-40.83992326653249,0]},
{ markerOffset: -11, name: "","coordinates":[-63.02194034725559,-40.84137837785953,0]},
{ markerOffset: -11, name: "","coordinates":[-63.0200317355698,-40.84281625253404,0]},
{ markerOffset: -11, name: "","coordinates":[-63.01811585776557,-40.84427305319397,0]},
{ markerOffset: -11, name: "","coordinates":[-63.01621361290527,-40.84572995563269,0]},
{ markerOffset: -11, name: "","coordinates":[-63.01431336401866,-40.84719895844827,0]},
{ markerOffset: -11, name: "","coordinates":[-63.01100209523897,-40.84758350543278,0]},
{ markerOffset: -11, name: "","coordinates":[-63.0092276102303,-40.84624357164255,0]},
{ markerOffset: -11, name: "","coordinates":[-63.00746576661692,-40.84490878968417,0]},
{ markerOffset: -11, name: "","coordinates":[-63.00569095762981,-40.8435681023784,0]},
{ markerOffset: -11, name: "","coordinates":[-63.00384318153715,-40.84214537233068,0]},
{ markerOffset: -11, name: "","coordinates":[-63.00210847160552,-40.84084831198372,0]},
{ markerOffset: -11, name: "","coordinates":[-63.00027591422182,-40.83944759458943,0]},
{ markerOffset: -11, name: "","coordinates":[-62.99840871252815,-40.83806626053188,0]},
{ markerOffset: -11, name: "","coordinates":[-62.99660973372542,-40.83671178276775,0]},
{ markerOffset: -11, name: "","coordinates":[-62.99483080911463,-40.83534503683139,0]},
{ markerOffset: -11, name: "","coordinates":[-62.99304325577844,-40.83398532443272,0]}, 
{ markerOffset: -11, name: "","coordinates":[-65.6650925148,-43.2810252998,26.8022460938]},
{ markerOffset: -11, name: "","coordinates":[-65.6330613233,-43.2775421999,43.384765625]},
{ markerOffset: -11, name: "","coordinates":[-65.6032955926,-43.2743997406,54.6802978516]},
{ markerOffset: -11, name: "","coordinates":[-65.5756958295,-43.2715037093,94.5747070313]},
{ markerOffset: -11, name: "","coordinates":[-65.5454147793,-43.2682687137,134.2287597656]},
{ markerOffset: -11, name: "","coordinates":[-65.5213952623,-43.2657047734,132.3061523438]},
{ markerOffset: -11, name: "","coordinates":[-65.4948936123,-43.26287814420001,130.3835449219]},
{ markerOffset: -11, name: "","coordinates":[-65.4654748924,-43.2634088863,61.4095458984]},
{ markerOffset: -11, name: "","coordinates":[-65.4351609014,-43.2639609184,41.9428710938]},
{ markerOffset: -11, name: "","coordinates":[-65.4105876759,-43.2643814385,46.5091552734]},
{ markerOffset: -11, name: "","coordinates":[-65.3785129823,-43.2593890931,41.7025146484]},
{ markerOffset: -11, name: "","coordinates":[-65.34643334340001,-43.2544504758,37.3767089844]},
{ markerOffset: -11, name: "","coordinates":[-65.3443382867,-43.25493084270001,34.9733886719]},
{ markerOffset: -11, name: "","coordinates":[-65.17889291187882,-43.34854272511447,0]},
{ markerOffset: -11, name: "","coordinates":[-65.17301726620367,-43.3232884102402,0]},
{ markerOffset: -11, name: "","coordinates":[-65.12509377182695,-43.30676125780207,0]},
{ markerOffset: -11, name: "","coordinates":[-65.12397251426094,-43.30568250916602,0]},
{ markerOffset: -11, name: "","coordinates":[-65.10396252812092,-42.71014916372623,0]},
{ markerOffset: -11, name: "","coordinates":[-65.11923014846862,-42.7150012535784,0]},
{ markerOffset: -11, name: "","coordinates":[-65.14060179552028,-42.7243324573665,0]},
{ markerOffset: -11, name: "","coordinates":[-65.14961637122812,-42.74652506424517,0]},
{ markerOffset: -11, name: "","coordinates":[-65.15069684958301,-42.77337113135279,0]},
{ markerOffset: -11, name: "","coordinates":[-65.15194733442982,-42.80633441648046,0]},
{ markerOffset: -11, name: "","coordinates":[-65.15808652842641,-42.83093459471537,0]},
{ markerOffset: -11, name: "","coordinates":[-65.16522240609885,-42.85938374045732,0]},
{ markerOffset: -11, name: "","coordinates":[-65.17522542152194,-42.87642837625543,0]},
{ markerOffset: -11, name: "","coordinates":[-65.18468172080064,-42.89261313005022,0]},
{ markerOffset: -11, name: "","coordinates":[-65.19267797917558,-42.91601856495178,0]},
{ markerOffset: -11, name: "","coordinates":[-65.2001418808036,-42.93782021202625,0]},
{ markerOffset: -11, name: "","coordinates":[-65.20817381999721,-42.96126235739008,0]},
{ markerOffset: -11, name: "","coordinates":[-65.19980484467997,-42.98480038491974,0]},
{ markerOffset: -11, name: "","coordinates":[-65.193726547217,-43.00193104073158,0]},
{ markerOffset: -11, name: "","coordinates":[-65.18506883110634,-43.02638514988771,0]},
{ markerOffset: -11, name: "","coordinates":[-65.19928839500358,-43.04434704943247,0]},
{ markerOffset: -11, name: "","coordinates":[-65.21360986526824,-43.06247289470984,0]},
{ markerOffset: -11, name: "","coordinates":[-65.37539198413926,-41.67444358599336,0]},
{ markerOffset: -11, name: "","coordinates":[-65.37575178496304,-41.68374550677367,0]},
{ markerOffset: -11, name: "","coordinates":[-65.32087937066554,-41.67903743232035,0]},
{ markerOffset: -11, name: "","coordinates":[-65.3468822570293,-41.68127600936177,0]},
{ markerOffset: -11, name: "","coordinates":[-65.31831819736077,-41.6787614535388,0]},
{ markerOffset: -11, name: "","coordinates":[-65.26157857473974,-41.67277407725372,0]},
{ markerOffset: -11, name: "","coordinates":[-65.29081938282789,-41.67586604020308,0]},
{ markerOffset: -11, name: "","coordinates":[-65.23890430751165,-41.67897371504841,0]},
{ markerOffset: -11, name: "","coordinates":[-65.21462606846173,-41.68553023928899,0]},
{ markerOffset: -11, name: "","coordinates":[-65.19572900563557,-41.69072097599365,0]},
{ markerOffset: -11, name: "","coordinates":[-65.17128742228536,-41.69736761467867,0]},
{ markerOffset: -11, name: "","coordinates":[-65.13698568796565,-41.69761693559731,0]},
{ markerOffset: -11, name: "","coordinates":[-65.07249609389106,-41.6980244185179,0]},
{ markerOffset: -11, name: "","coordinates":[-65.04105845336497,-41.69823205020936,0]},
{ markerOffset: -11, name: "","coordinates":[-65.10656956178882,-41.69781835863189,0]},
{ markerOffset: -11, name: "","coordinates":[-65.03001149117232,-41.69796851013588,0]},
{ markerOffset: -11, name: "","coordinates":[-65.37627384571464,-41.67332022042213,0]},
{ markerOffset: -11, name: "","coordinates":[-65.37573711093819,-41.67201243773409,0]},
{ markerOffset: -11, name: "","coordinates":[-65.37718886120796,-41.67030519423857,0]},
{ markerOffset: -11, name: "","coordinates":[-65.3807129067905,-41.66957513772429,0]},
{ markerOffset: -11, name: "","coordinates":[-65.40658600549403,-41.61619323246623,0]},
{ markerOffset: -11, name: "","coordinates":[-65.35981270597901,-41.42905965331492,0]},
{ markerOffset: -11, name: "","coordinates":[-65.35857416731045,-41.42813950046259,0]},
{ markerOffset: -11, name: "","coordinates":[-65.35885654714728,-41.4151822853129,0]},
{ markerOffset: -11, name: "","coordinates":[-65.33029770908038,-41.1829666347511,0]},
{ markerOffset: -11, name: "","coordinates":[-65.29492534120507,-41.04612287147381,0]},
{ markerOffset: -11, name: "","coordinates":[-65.32200358647741,-41.15363978141733,0]},
{ markerOffset: -11, name: "","coordinates":[-65.17867470544338,-40.82282243412671,0]},
{ markerOffset: -11, name: "","coordinates":[-65.39388862327613,-41.64232334709947,0]},
{ markerOffset: -11, name: "","coordinates":[-65.4002418990291,-41.59098551759056,0]},
{ markerOffset: -11, name: "","coordinates":[-65.39364629823785,-41.56470788821753,0]},
{ markerOffset: -11, name: "","coordinates":[-65.3865696159468,-41.53646923395036,0]},
{ markerOffset: -11, name: "","coordinates":[-65.37948512162582,-41.50785100086343,0]},
{ markerOffset: -11, name: "","coordinates":[-65.372967289505,-41.48171492476919,0]},
{ markerOffset: -11, name: "","coordinates":[-65.33220546009258,-41.20014273088172,0]},
{ markerOffset: -11, name: "","coordinates":[-65.33828085641424,-41.24243786727901,0]},
{ markerOffset: -11, name: "","coordinates":[-65.34531061211425,-41.3007204599171,0]},
{ markerOffset: -11, name: "","coordinates":[-65.35216491359614,-41.35805887966565,0]},
{ markerOffset: -11, name: "","coordinates":[-65.3554856734101,-41.38627720250606,0]},
{ markerOffset: -11, name: "","coordinates":[-65.34871940936316,-41.32927801962983,0]},
{ markerOffset: -11, name: "","coordinates":[-65.34179828041411,-41.27166509856078,0]},
{ markerOffset: -11, name: "","coordinates":[-65.33525283006057,-41.22131263256064,0]},
{ markerOffset: -11, name: "","coordinates":[-65.31539125205416,-41.12735316334678,0]},
{ markerOffset: -11, name: "","coordinates":[-65.30876157770336,-41.10105199922244,0]},
{ markerOffset: -11, name: "","coordinates":[-65.30192891745529,-41.07387341345115,0]},
{ markerOffset: -11, name: "","coordinates":[-65.28050113624685,-41.02056942253193,0]},
{ markerOffset: -11, name: "","coordinates":[-65.24621405080316,-40.95995684977617,0]},
{ markerOffset: -11, name: "","coordinates":[-65.19095967768669,-40.84785600083441,0]},
{ markerOffset: -11, name: "","coordinates":[-65.26965430074378,-41.00159272846044,0]},
{ markerOffset: -11, name: "","coordinates":[-65.25792961142358,-40.9807731504263,0]},
{ markerOffset: -11, name: "","coordinates":[-65.21996945544103,-40.90676073265501,0]},
{ markerOffset: -11, name: "","coordinates":[-65.2058858484053,-40.87820913272212,0]},
{ markerOffset: -11, name: "","coordinates":[-65.23031352975471,-40.92770977833394,0]},
{ markerOffset: -11, name: "","coordinates":[-65.36644897557238,-41.45562739318409,0]},
{ markerOffset: -11, name: "","coordinates":[-65.15060060646266,-40.80287735327849,0]},
{ markerOffset: -11, name: "","coordinates":[-65.12646119453211,-40.78570008347168,0]},
{ markerOffset: -11, name: "","coordinates":[-65.10081466724635,-40.76745302489272,0]},
{ markerOffset: -11, name: "","coordinates":[-65.1573370999246,-42.58795218777463,0]},
{ markerOffset: -11, name: "","coordinates":[-65.12655384897991,-42.62916829550956,0]},
{ markerOffset: -11, name: "","coordinates":[-65.11771197109532,-42.6636597194768,0]},
{ markerOffset: -11, name: "","coordinates":[-65.11638710521056,-42.66884414138058,0]},
{ markerOffset: -11, name: "","coordinates":[-65.1089226562702,-42.6981673544492,0]},
{ markerOffset: -11, name: "","coordinates":[-65.10507084436381,-42.69834629924118,0]},
{ markerOffset: -11, name: "","coordinates":[-65.10487707698019,-42.69911529250498,0]},
{ markerOffset: -11, name: "","coordinates":[-65.10226331466153,-42.70125249050881,0]},
{ markerOffset: -11, name: "","coordinates":[-65.10347246724636,-42.70632714755303,0]},
{ markerOffset: -11, name: "","coordinates":[-65.1079308677258,-42.70148731542797,0]},
{ markerOffset: -11, name: "","coordinates":[-65.10886417282337,-42.7004258600875,0]},
{ markerOffset: -11, name: "","coordinates":[-65.15758600441625,-42.70667158673051,0]},
{ markerOffset: -11, name: "","coordinates":[-65.20604150518105,-42.71287471416176,0]}, 
{ markerOffset: -11, name: "","coordinates":[-65.20473705748729,-42.73836067247091,0]},
{ markerOffset: -11, name: "","coordinates":[-65.2069027597484,-42.74118589199709,0]},
{ markerOffset: -11, name: "","coordinates":[-65.20637506696852,-42.76679276675975,0]},
{ markerOffset: -11, name: "","coordinates":[-65.23541082123009,-42.79572922824937,0]},
{ markerOffset: -11, name: "","coordinates":[-65.26349808199497,-42.82366203315928,0]},
{ markerOffset: -11, name: "","coordinates":[-65.29148383358981,-42.85145101773286,0]},
{ markerOffset: -11, name: "","coordinates":[-65.31978754414081,-42.87950405790018,0]},
{ markerOffset: -11, name: "","coordinates":[-65.34790900583046,-42.90734350809335,0]},
];

const Mapa = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [70, 20, 0],
                scale: 1400

            }}
        >
            <ZoomableGroup zoom={1} center={[-50,-49]}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#EAEAEC"
                                    stroke="#D6D6DA"
                                />
                            ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <circle r={1} fill="#F00" stroke="#fff" strokeWidth={0.01} />
                        <text
                            textAnchor="middle"
                            y={markerOffset}
                            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default Mapa;
