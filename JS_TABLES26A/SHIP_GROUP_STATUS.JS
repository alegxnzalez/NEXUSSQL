// SHIP_GROUP_STATUS.js

window.SHIP_GROUP_STATUS = {
  "tables": {
    "SHIP_GROUP_STATUS": {
      "description": "Contains the statuses for the shipment groups.",
      "columns": {
        "SHIP_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP",
          "info": "The GID for the shipment group."
},
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STATUS_VALUE",
          "info": "The status type of the shipment group"
},
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "STATUS_VALUE",
          "info": "The status value for the status type of  the shipment group"
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
}
      },
      "fk_tables": []
    }
  }
};