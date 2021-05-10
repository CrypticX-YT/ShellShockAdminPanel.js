// ==UserScript==
// @name         [🔥CRYPTICTECH ADMIN PANEL!!🔥] ShellShockers Invisibility & Speed Hack that works by CrypticX
// @namespace    https://greasyfork.org/en/users/745409
// @version      1.4.7
// @description  INVISIBILITY, EGG SIZE, SPEED & MORE!! ENJOY An AMIN PANEL THAT WORKS 100%
// @author       CrypticX
// @match        https://shellshock.io/*
// @match        https://eggcombat.com/*
// @match        https://eggfacts.fun/*
// @match        https://biologyclaCrypticss.club/*
// @match        https://egghead.institute/*
// @match        https://egg.dance/*
// @match        https://eggisthenewblack.com/*
// @match        https://mathfun.rocks/*
// @match        https://hardboiled.life/*
// @match        https://overeasy.club/*
// @match        https://zygote.cafe/*
// @match        https://eggsarecool.com/*
// @match        https://deadlyegg.com/*
// @match        https://mathgames.world/*
// @match        https://hardshell.life/*
// @match        https://violentegg.club/*
// @match        https://yolk.life/*
// @match        https://softboiled.club/*
// @match        https://scrambled.world/*
// @match        https://algebra.best/*
// @match        https://scrambled.today/*
// @match        https://deathegg.world/*
// @match        https://violentegg.fun/*
// @license      LGPL-3.0-or-later
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js
// ==/UserScript==



var player = document.createElement('audio');
player.src = 'https://x2convert.com/Thankyou?token=U2FsdGVkX1%2bf006DMtfBICzBovSt2FrWPJTrTpbHpuWSeTKrZspYDfRGmYi5moz5cgz44ULDJRSUOByS6nCoQG9kjC5spnvhMA1eQOJtb6rpP%2b31i6pUU4P0zSzpdNr8qMOk5MzlevyMH%2bDZ4WEX5wQoA51FWzIOG9GTqCaOyOLsGcePa1mwAiNn0N3ma12jUeKThFeyHlSq1uY6QjLAlLYKmS4fVV%2bAdyKGluoRzYtyj4e%2btigcU3En5LVCvIvtDo1UUOz0tenmJ%2bXTyK3jPg%3d%3d&s=youtube&id=&h=5284142102715195268';
player.controls = true;
player.style.position = "absolute";
player.style.bottom = "0px";
player.style.right = "0px";
document.body.appendChild(player);

(function() {

    let ping = document.getElementById('ping');


    const getPing = ()=>{
        try{return parseInt(ping.innerText.toLowerCase().replace('ms', ''))}catch(e){
            document.getElementById('ping');
            return 40}};

    let lastShotSpread = 0;

    WebSocket = class extends WebSocket{
        constructor(a){
            console.log(a);
            super(...arguments);
        }
        send(){
            //console.log(arguments[0]);
            super.send(...arguments);
        }

        set onmessage(callback){
            const oldHook = callback;
            callback = function(e){
                // console.log(e.data);
                return oldHook.apply(this, arguments);
            }
            super.onmessage = callback;
        }
    }
    'use strict';
    const oldDefine = Object.defineProperty;
    Object.defineProperty = function(a,b,c){

        if(arguments[1]=="collisionMask" || b == "collisionMask"){
        }

        return oldDefine.apply(this,arguments);
    }


    window.players = new Map();
    window.myPlayer = null;
    var push = Array.prototype.push;

    window.settings = {
        HasPwned:false,
        WireFrame:false,
        ESP:true,
        FOG:0,
        Creator: "CrypticX",
        Speed:1,
        Recoil:0,
        aimbot:true,
        Invisibility:1,
        ToggleAim:'ShiftLeft',
        EggSize:1,
    }

    let nameFind = setInterval(function(){
        if(document.getElementsByClassName("ss_field fullwidth")[0].value){
            window.settings.myName = document.getElementsByClassName("ss_field fullwidth")[0].value;
        }
    },1000)
    
      document.addEventListener('keydown', (e)=>{
       if(e.code===window.settings.ToggleAim) window.settings.aimbot=true;
    })

      document.addEventListener('keyup', (e)=>{
       if(e.code===window.settings.ToggleAim) window.settings.aimbot=false;
    })
 

    Array.prototype.push = function(data) {

        try{
            //console.log(this);
            if(arguments[0].origin || this.origin){};
            if(arguments[0].player && arguments[0].id){
                arguments[0].player.HACK_VISIBLE = true;
                window.players.set(arguments[0].player.id, arguments[0].player);

            }
        }catch(e){}

        return push.apply(this, arguments);
    }

    const getNearest = (myPlayer, them) => {
        let nearest = {object:null,dist:999};
        them.forEach((obj, ts) =>{
            if(!obj){};

            if(!obj.derp && obj.actor){
                Object.defineProperty(obj.actor.bodyMesh, 'renderingGroupId',  {
                    get: () => {
                        return window.settings.Invisibility;
                    }
                });

                const setVis = obj.actor.mesh.setVisible;
                obj.actor.mesh.setVisible = function(args){
                    obj.HACK_VISIBLE = args;
                    if(window.settings.ESP){
                        return setVis.apply(this,[true]);
                    }else{
                        return setVis.apply(this,arguments);
                    }

                }

                obj.derp =true;
            }

            if(obj.actor){
                obj.actor.bodyMesh.scaling = {x:window.settings.EggSize, y:window.settings.EggSize, z:window.settings.EggSize}
            }


            if(obj && obj.id != myPlayer.id && obj.hp > 0 && (obj.team == 0 || (obj.team != myPlayer.team))){

                let dist = calcDist2d(myPlayer, obj);

                if(dist < nearest.dist){
                    nearest.dist=dist;
                    nearest.object=obj;
                }
            }else{};


        })
        return nearest;
    }

    const calcDist2d = (p1,p2) => {
        return Math.sqrt(  (p1.x-p2.x)**2 + (p1.y-p2.y)**2);
    }


    window.getTargetAngle = function(angle){
        if (angle < 0) angle += Math.PI * 2;
        if (angle < 0) angle += Math.PI * 2;
        if (angle < 0) angle += Math.PI * 2;
        if (angle - Math.PI * 2 > 0) angle -= Math.PI * 2;
        if (angle - Math.PI * 2 > 0) angle -= Math.PI * 2;
        if (angle - Math.PI * 2 > 0) angle -= Math.PI * 2;
        return angle;
    };

    window.getTargetDelta = function(them, us, dist){
        return {x: them.x - us.x + 10*(them.dx * dist / us.weapon.subClass.velocity),
                y: them.y - us.y + them.dy * dist / us.weapon.subClass.velocity - (((dist/us.weapon.subClass.velocity)**2)/2)*0.012 - 0.092,
                z: them.z - us.z + 10*(them.dz * dist / us.weapon.subClass.velocity),
               };
    };

    class SeededRandom{
        constructor(){};

        setSeed(e) {
            this.seed = e
        }
        getFloat(e, t) {
            return e = e || 0,
                t = t || 1,
                this.seed = (9301 * this.seed + 49297) % 233280,
                e + this.seed / 233280 * (t - e)
        }

        getInt(e, t) {
            return Math.floor(this.seededRandom(e, t))
        }

    }

    const adjustedTarget = function(delta, us, Dss, Dt) {
        delta = new BABYLON.Vector3(delta.x, delta.y, delta.z).normalize();
        const desiredMat = BABYLON.Matrix.Translation(delta.x, delta.y, delta.z);

        let shotSpread_per_MS = Dss / Dt;

        let spread = us.shotSpread - shotSpread_per_MS*getPing()/5 + us.weapon.inaccuracy;
        //var spread = 0;
        if(spread < 0.1){return delta};
        if (isNaN(spread)) {
            spread = 0;
        }

        const rgenCopy = new SeededRandom();
        rgenCopy.setSeed(us.randomGen.seed);

        const spreadInverseMat = BABYLON.Matrix.RotationYawPitchRoll(
            (rgenCopy.getFloat() - 0.5) * spread,
            (rgenCopy.getFloat() - 0.5) * spread,
            (rgenCopy.getFloat() - 0.5) * spread).invert();

        const newAimVector = desiredMat.multiply(spreadInverseMat).getTranslation();
        return newAimVector;
    };

    window.lookAtHead = function(us, target, dist, Dss, Dt) {
        const delta = window.getTargetDelta(target, us, dist);

        let newAimVector = adjustedTarget(delta, us, Dss, Dt);

        const newYaw = Math.radRange(-Math.atan2(newAimVector.z, newAimVector.x) + Math.PI / 2)

        const newPitch = Math.clamp(-Math.asin(newAimVector.y), -1.5, 1.5);

        us.pitch = newPitch;
        us.yaw = newYaw;

    }

    const clearRect =requestAnimationFrame;
    let update = performance.now();

    requestAnimationFrame = function(){

        window.players.forEach((obj, ts) =>{
            if(obj.ws){
                window.myPlayer = obj;
                window.players.delete(obj.id);
            }
        });
        if(window.myPlayer){

            const deltaShotSpread = myPlayer.shotSpread - lastShotSpread;
            const deltaTime = performance.now() - update;

            update = performance.now();
            lastShotSpread = myPlayer.shotSpread;

            if(!window.settings.HasPwned){
                Object.defineProperty(window.myPlayer.scene.cameras[0], 'Speed',  {
                    get: () => {
                        return window.settings.Speed;
                    }
                });
                window.settings.HasPwned=true;

                Object.defineProperty(window.myPlayer.scene, 'forceWireframe',  {
                    get: () => {
                        return window.settings.WireFrame;
                    }
                });

                window.settings.HasPwned=true;
            }
            let ret = getNearest(window.myPlayer, window.players);
            if(ret.object && window.settings.aimbot){
                window.lookAtHead(window.myPlayer, ret.object, ret.dist, deltaShotSpread, deltaTime);

            }else{
            }
        }
        return clearRect.apply(this,arguments);
    }



    datgui();

    function datgui(){
        let gui = new dat.GUI();

        // Settings
        let guiSettings = gui.addFolder('CrypticTech Admin Panel');
        guiSettings.add(window.settings, 'HasPwned').onChange((e)=>{
            window.settings.HasPwned=e;
        });
        guiSettings.add(window.settings, 'WireFrame').onChange((e)=>{
            window.settings.WireFrame=e;
        });
        guiSettings.add(window.settings, 'ESP').onChange((e)=>{
            window.settings.ESP=e;
        });
        guiSettings.add(window.settings, 'Invisibility',1,5).step(0.1).onChange((e)=>{
            window.settings.Invisibility=e;
        });
        guiSettings.add(window.settings, 'EggSize',1,20).step(1).onChange((e)=>{
            window.settings.EggSize=e;
        });
        guiSettings.add(window.settings, 'Speed', 1,3).step(0.1).onChange((e)=>{
            window.settings.Speed=e;
        });
        guiSettings.add(window.settings, 'FOG',0,10).step(1).onChange((e)=>{
            window.settings.FOG=e;
        });
        guiSettings.add(window.settings, 'Recoil',0,4).step(0.4).onChange((e)=>{
            window.settings.Recoil=e;
        });
        guiSettings.add(window.settings, 'Creator').onChange();
        guiSettings.open();
        document.getElementsByClassName("dg ac")[0].style.zIndex=9999;
        return gui;
    }
})();
