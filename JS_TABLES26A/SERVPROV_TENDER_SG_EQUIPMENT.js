// SERVPROV_TENDER_SG_EQUIPMENT.js

window.SERVPROV_TENDER_SG_EQUIPMENT = {
  "tables": {
    "SERVPROV_TENDER_SG_EQUIPMENT": {
      "description": "This table is used to store the equipment initial and number provided by servprov during tendering process of ship group.",
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
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SG_SERVPROV",
          "info": "to identify the service provider who entered the equipment initial and number"
},
        "SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_EQUIPMENT",
          "info": "used to match s_equipment of a shipment."
},
        "EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Identifies the equipment owner for identification."
},
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "A unique identifier for a specific piece of equipment."
},
        "EQUIPMENT_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "This field is a combination of equipment initial and equipment number."
},
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "The GID for the equipment type."
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The GID for the equipment group."
},
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SERVPROV_STATUS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "A",
                    "R",
                    "N"
          ],
          "info": "A for accept, R for reject, N for new."
},
        "CHECK_DIGIT": {
          "type": "NUMBER",
          "nullable": true
},
        "LICENSE_PLATE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SHIP_GROUP_TENDER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SG_SERVPROV",
          "info": "A unique identifier to identify the ship group tender."
}
      },
      "fk_tables": []
    }
  }
};