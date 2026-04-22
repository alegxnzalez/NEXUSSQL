// EQUIPMENT_LOAD_HISTORY.js

window.EQUIPMENT_LOAD_HISTORY = {
  "tables": {
    "EQUIPMENT_LOAD_HISTORY": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT",
          "info": "GID for the Equipment used in the Shipment."
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GID of the Shipment for which the Equipment was used."
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Start Time for the Shipment"
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "End Time for the Shipment"
},
        "COMPARTMENT_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Position or number of the compartment in the Equipment used."
},
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "GID of the Packaged Item for that compartment."
},
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY",
          "info": "GID for the commodity in the compartment of the Equipment."
},
        "COMPARTMENT_TYPE_GID": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "COMPARTMENT_TYPE",
          "info": "Type of the Compartment in the Equipment."
},
        "HAS_METER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Boolean flag to determine in the equipment has a meter or not."
},
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "GID of the Shipment Equipment."
},
        "COMPARTMENT_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight of the compartment of the Equipment"
},
        "COMPARTMENT_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Base value of compartment weight."
},
        "COMPARTMENT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "UOM code of the compartment weight."
},
        "COMPARTMENT_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Volume of the compartment of the equipment"
},
        "COMPARTMENT_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Case value for compartment volume"
},
        "COMPARTMENT_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "UOM code for compartment volume"
}
      },
      "fk_tables": []
    }
  }
};