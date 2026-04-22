// IE_S_SHIP_UNIT_LINE.js

window.IE_S_SHIP_UNIT_LINE = {
  "tables": {
    "IE_S_SHIP_UNIT_LINE": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the shipment ship unit line data of the tracking event. "
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The shipment ship unit associated with the tracking event being reported. "
        },
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "The shipment ship unit line associated with the tracking event being reported. "
        },
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The packaging item defined for the shipping line. "
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The packaging unit associated with the packaging item. "
        },
        "RECEIVED_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received weight recorded on the tracking event for the shipment ship unit line. "
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
          "info": "The received volume recorded on the tracking event for the shipment ship unit line. "
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
        "RECEIVED_ITEM_PACKAGE_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received item count in eaches recorded on the tracking event for the shipment ship unit line. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages. "
        },
        "RECEIVED_PACKAGING_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The received item count in terms of packaging units recorded on the tracking event for the shipment ship unit line. "
        },
        "RECEIVED_COUNT_PER_SHIP_UNIT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The received item count in eaches on a per ship unit received recorded on the tracking event for the shipment ship unit line. "
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
