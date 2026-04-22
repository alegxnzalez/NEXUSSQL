// IE_SS_S_EQUIPMENT_SEAL.js

window.IE_SS_S_EQUIPMENT_SEAL = {
  "tables": {
    "IE_SS_S_EQUIPMENT_SEAL": {
      "columns": {
        "I_REC_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The record number primary key identifier for the tracking event specified. "
        },
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the shipment equipment seal data of the tracking event. "
        },
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The shipment equipment GID. "
        },
        "SEAL_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The seal sequence number that refers to the compartment that is being sealed. "
        },
        "SEAL_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "The seal number that identifies the seal tag. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
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
