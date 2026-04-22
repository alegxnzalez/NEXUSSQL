// IE_SHIP_GROUP_REFNUM.js

window.IE_SHIP_GROUP_REFNUM = {
  "tables": {
    "IE_SHIP_GROUP_REFNUM": {
      "columns": {
        "I_REC_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The record number primary key identifier for the tracking event specified."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The transaction identifier for the shipment group reference number data of the tracking event."
},
        "SHIP_GROUP_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP_REFNUM_QUAL",
          "info": "The shipment group reference number qualifier identifier."
},
        "SHIP_GROUP_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The shipment group reference number value for the qualifier defined."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages."
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