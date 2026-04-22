// SHIPMENT_S_EQUIPMENT_JOIN.js

window.SHIPMENT_S_EQUIPMENT_JOIN = {
  "tables": {
    "SHIPMENT_S_EQUIPMENT_JOIN": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The GID for the ship unit associated with the shipment."
},
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_EQUIPMENT",
          "info": "The GID for the equipment associated with the shipment."
},
        "CAPACITY_USAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CAPACITY_USAGE",
          "info": "The capacity usage GID that was used for the shipment."
},
        "PICKUP_STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The stop number where the equipment is picked up.  It is null if not picked up in this shipment."
},
        "DROPOFF_STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The stop number where the equipment is dropped off. It is null if not dropped off in this shipment."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "S_EQUIPMENT_INDEX": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The standing order of the equipment on the shipment."
}
      },
      "fk_tables": []
    }
  }
};