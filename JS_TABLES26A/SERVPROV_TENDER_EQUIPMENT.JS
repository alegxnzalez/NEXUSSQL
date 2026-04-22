// SERVPROV_TENDER_EQUIPMENT.js

window.SERVPROV_TENDER_EQUIPMENT = {
  "tables": {
    "SERVPROV_TENDER_EQUIPMENT": {
      "description": "This table is used to store the equipment initial and number provided by servprov during tendering process.",
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SERVPROV",
          "info": "used as tender_collaboration id."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SERVPROV",
          "info": "used to identify the service provider who entered the equipment initial and number"
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
          "info": "service provider's equipment initial"
},
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "service provider's equipment number"
},
        "EQUIPMENT_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "service provider's equipment initial and number"
},
        "RESPONSE_I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": true
},
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE"
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP"
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
        "CHECK_DIGIT": {
          "type": "NUMBER",
          "nullable": true
},
        "LICENSE_PLATE": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};