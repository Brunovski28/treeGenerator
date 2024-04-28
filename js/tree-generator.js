AFRAME.registerComponent('tree-generator', {
    schema:{
        posX: {type: 'int', default: 0}
    ,   posZ: {type: 'int', default: -50}
    },

    init: function () {
        var sceneEl = this.el;
        var treeTemplate = document.querySelector('#tree-template');

        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 10; j++){

            var scale = Math.random() * 0.5 + 0.5;
            
            this.data.posX += 5

            var tree = treeTemplate.cloneNode(true);
            tree.setAttribute('position', { x: this.data.posX, y: 0, z: this.data.posZ });
            tree.setAttribute('scale', { x: scale, y: scale, z: scale });

            sceneEl.appendChild(tree);
            }

            this.data.posX = 0
            this.data.posZ += 15           
            
        }
    }
});