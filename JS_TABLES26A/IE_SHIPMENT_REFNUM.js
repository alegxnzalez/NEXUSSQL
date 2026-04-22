// IE_SHIPMENT_REFNUM.js

window.IE_SHIPMENT_REFNUM = {
  "tables": {
    "IE_SHIPMENT_REFNUM": {
      "description": "The IE series of tables is a method to store the EDI information from a Blob into a more relational format. However these may change in ver 3.0.",
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
          "info": "The transaction identifier for the shipment reference number data of the tracking event."
},
        "SHIPMENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT_REFNUM_QUAL",
          "info": "The shipment reference number qualifier identifier."
},
        "SHIPMENT_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The shipment reference number value for the qualifier defined."
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