// IE_S_SHIP_UNIT.js

window.IE_S_SHIP_UNIT = {
  "tables": {
    "IE_S_SHIP_UNIT": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the shipment ship unit data of the tracking event. "
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The shipment ship unit associated with the tracking event being reported. "
        },
        "RECEIVED_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received weight recorded on the tracking event for the shipment ship unit. "
        },
        "RECEIVED_WEIGHT_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The received weight unit of measure. "
        },
        "RECEIVED_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received weight in the base unit of measure. "
        },
        "RECEIVED_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received volume recorded on the tracking event for the shipment ship unit. "
        },
        "RECEIVED_VOLUME_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The received volume unit of measure. "
        },
        "RECEIVED_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received volume in the base unit of measure. "
        },
        "RECEIVED_SHIP_UNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received ship unit count recorded on the tracking event for the shipment ship unit. "
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
          "info": "Date and time of the most recent data update. "
        },
        "TAG_1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A flexible field to contain informational data that has been copied for tracking event ship unit. "
        },
        "TAG_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A flexible field to contain informational data that has been copied for tracking event ship unit. "
        },
        "TAG_3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A flexible field to contain informational data that has been copied for tracking event ship unit. "
        },
        "TAG_4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A flexible field to contain informational data that has been copied for tracking event ship unit."
        }
      },
      "fk_tables": []
    }
  }
};
