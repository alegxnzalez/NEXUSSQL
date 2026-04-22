// OB_SHIP_UNIT_SEAL.js

window.OB_SHIP_UNIT_SEAL = {
  "tables": {
    "OB_SHIP_UNIT_SEAL": {
      "description": "This table defines the lock or seal information for the box or pallet if needed. This can be used at the delivery time to check if the package is sealed or locked with the pre-defined number.",
      "columns": {
        "OB_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_SHIP_UNIT",
          "info": "The GID for the order base ship unit."
},
        "SHIP_UNIT_SEAL": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "The transport handling unit seal number for the order base ship unit."
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
}
      },
      "fk_tables": []
    }
  }
};