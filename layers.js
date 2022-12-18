var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_amenity_school_1 = new ol.format.GeoJSON();
var features_amenity_school_1 = format_amenity_school_1.readFeatures(json_amenity_school_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_school_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_school_1.addFeatures(features_amenity_school_1);
var lyr_amenity_school_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amenity_school_1, 
                style: style_amenity_school_1,
                interactive: true,
                title: '<img src="styles/legend/amenity_school_1.png" /> amenity_school'
            });
var format_religion_muslim_2 = new ol.format.GeoJSON();
var features_religion_muslim_2 = format_religion_muslim_2.readFeatures(json_religion_muslim_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_religion_muslim_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_religion_muslim_2.addFeatures(features_religion_muslim_2);
var lyr_religion_muslim_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_religion_muslim_2, 
                style: style_religion_muslim_2,
                interactive: true,
                title: '<img src="styles/legend/religion_muslim_2.png" /> religion_muslim'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_amenity_school_1.setVisible(true);lyr_religion_muslim_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_amenity_school_1,lyr_religion_muslim_2];
lyr_amenity_school_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'name:en': 'name:en', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', });
lyr_religion_muslim_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'name': 'name', 'amenity': 'amenity', });
lyr_amenity_school_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'name': '', 'name:en': '', 'addr:street': '', 'addr:postcode': '', });
lyr_religion_muslim_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': '', 'name': '', 'amenity': '', });
lyr_amenity_school_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'name': 'no label', 'name:en': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', });
lyr_religion_muslim_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'name': 'no label', 'amenity': 'no label', });
lyr_religion_muslim_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});