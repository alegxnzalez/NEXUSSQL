// SG_STATUS_HISTORY.js

window.SG_STATUS_HISTORY = {
  "tables": {
    "SG_STATUS_HISTORY": {
      "columns": {
        "SHIP_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP",
          "info": "The shipment group GID for the tracking event. "
        },
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier linked to the shipment group. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider associated with generating the tracking event. "
        },
        "REPORTING_GLUSER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The reporting application user if the tracking event was entered via the system's tracking event UI. "
        },
        "REPORTING_COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "The reporting method that links into the communication methods defined for OTM. "
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
