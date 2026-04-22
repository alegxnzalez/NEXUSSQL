// SS_STATUS_HISTORY.js

window.SS_STATUS_HISTORY = {
  "tables": {
    "SS_STATUS_HISTORY": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT",
          "info": "The shipment identifier for the tracking event. "
        },
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the shipment data of the tracking event. "
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
        "REPORTING_METHOD": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "The reporting method that links into the communication methods defined for OTM. "
        },
        "SHIPMENT_STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The shipment stop number for a stop based event. "
        },
        "EVENT_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location identifier of an location based event. This will be null for non-location based events. "
        },
        "IS_HIDDEN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator to display the status history. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages. "
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
      "fk_tables": [
        "SS_EQUIPMENT_STATUS_HISTORY",
        "SS_STATUS_HISTORY_EVENT_GROUP"
      ]
    }
  }
};
