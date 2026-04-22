// TENDER_COLLAB_SG.js

window.TENDER_COLLAB_SG = {
  "tables": {
    "TENDER_COLLAB_SG": {
      "description": "This tables stores the ship group tender information.",
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
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false
},
        "SHIP_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIP_GROUP",
          "info": "The GID for ship group."
},
        "TENDER_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "Ordinary"
          ],
          "info": "Defines the type of tender.Currently, it supports 'Ordinary' tender only."
},
        "SHIP_GROUP_TIME": {
          "type": "DATE",
          "nullable": false
},
        "EXPECTED_RESPONSE": {
          "type": "DATE",
          "nullable": true
},
        "ORIGIN_LOCATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the origin location."
},
        "DESTINATION_LOCATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the destination location."
},
        "DELIVERY_TIME": {
          "type": "DATE",
          "nullable": false
},
        "ORIGINAL_PICKUP_TIME": {
          "type": "DATE",
          "nullable": true
},
        "PROCESS_CONTROL_REQUEST_ID": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_GROUP_TENDER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A unique identifier to identify the ship group tender."
},
        "SHIP_GROUP_TENDER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
}
      },
      "fk_tables": [
        "TENDER_COLLAB_SG_SERVPROV",
        "TENDER_COLLAB_SG_STATUS"
]
    }
  }
};