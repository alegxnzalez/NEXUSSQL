// OB_REFNUM.js

window.OB_REFNUM = {
  "tables": {
    "OB_REFNUM": {
      "description": "Reference number, nickname or alternate ways to identify the order in the customer's internal systems. For e.g., the customer may have SAP, JDE applications that supply a different internal code for the order in GC3.",
      "columns": {
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The GID for the order base."
},
        "OB_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_REFNUM_QUAL",
          "info": "The reference qualifier GID defining the reference  code."
},
        "OB_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The value associated to the reference code."
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