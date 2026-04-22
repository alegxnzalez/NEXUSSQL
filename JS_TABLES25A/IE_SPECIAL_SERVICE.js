// IE_SPECIAL_SERVICE.js

window.IE_SPECIAL_SERVICE = {
  "tables": {
    "IE_SPECIAL_SERVICE": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the shipment ship unit line data of the tracking event. "
        },
        "I_REC_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The record number primary key identifier for the tracking event specified. "
        },
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The special service identifier that is being reported against with the tracking event being reported. "
        },
        "SERVICE_DURATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The time duration that occurred for the special service on the tracking event. "
        },
        "SERVICE_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The service duration unit of measure. "
        },
        "SERVICE_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The service duration in the base unit of measure. "
        },
        "SERVICE_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The time for the special service activity on the tracking event. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight for the special service activity recorded on the tracking event for the shipment. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The special service weight unit of measure. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The special service weight in the base unit of measure. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume for the special service activity recorded on the tracking event for the shipment. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The special service volume unit of measure. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The special service volume in the base unit of measure. "
        },
        "DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The distance for the special service activity recorded on the tracking event for the shipment. "
        },
        "DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The special service distance unit of measure. "
        },
        "DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The special service distance in the base unit of measure. "
        },
        "ITEM_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The item piece count for the special service activity recorded on the tracking event for the shipment. "
        },
        "SHIP_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The ship unit count for the special service activity recorded on the tracking event for the shipment. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages. "
        },
        "SERVICE_COMPLETION_STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "NOT STARTED",
            "COMPLETED",
            "IN PROGRESS"
          ],
          "info": "An indication if the special service activity was completed with the tracking event. "
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
