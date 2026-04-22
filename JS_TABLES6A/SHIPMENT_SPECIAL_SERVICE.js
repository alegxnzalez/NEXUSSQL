// SHIPMENT_SPECIAL_SERVICE.js

window.SHIPMENT_SPECIAL_SERVICE = {
  "tables": {
    "SHIPMENT_SPECIAL_SERVICE": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The shipment associated with the remark. "
        },
        "SHIPMENT_SPECIAL_SERVICE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence to keep shipment special services unique. "
        },
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The special service associated with the remark. "
        },
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "If the special service is for a particular stop, this indicates the stop number. "
        },
        "PROCESS_AS_FLOW_THRU": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The override for record to be copied to the sell side during rating. "
        },
        "ADJUSTMENT_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ADJUSTMENT_REASON",
          "info": "The reason why charge was added. "
        },
        "COMPLETION_STATE": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "values": [
            "NOT STARTED",
            "IN PROGRESS",
            "COMPLETED"
          ],
          "info": "Indicates completion state of this special service. "
        },
        "PAYABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYABLE_INDICATOR",
          "info": "Indicates the payable status of this special service; if values, overrides the payable status on the special service itself. "
        },
        "BILLABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BILLABLE_INDICATOR",
          "info": "indicates the billable status of this special service; if values, overrides the billable status on the special service itself. "
        },
        "ACTUAL_OCCUR_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The actual date and time special service occurred. "
        },
        "PLANNED_DURATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The planned duration of the special service. "
        },
        "PLANNED_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The planned duration unit of measure. "
        },
        "PLANNED_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The planned duration in the base unit of measure. "
        },
        "IS_PLANNED_DURATION_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, prevents the system from overwriting the planned duration for the special service. "
        },
        "ACTUAL_DURATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual duration of the special service. "
        },
        "ACTUAL_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The actual duration unit of measure. "
        },
        "ACTUAL_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual duration in the base unit of measure. "
        },
        "ACTUAL_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual distance of the special service. "
        },
        "ACTUAL_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The actual distance unit of measure. "
        },
        "ACTUAL_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual distance in the base unit of measure. "
        },
        "ACTUAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual weight of the goods applicable to this special service. "
        },
        "ACTUAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The actual weight unit of measure. "
        },
        "ACTUAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual weight in the base unit of measure. "
        },
        "ACTUAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual volume of the goods applicable to this special service. "
        },
        "ACTUAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The actual volume unit of measure. "
        },
        "ACTUAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual volume base unit of measure. "
        },
        "ACTUAL_SHIP_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The actual ship unit count applicable to this special service. "
        },
        "ACTUAL_ITEM_PACKAGE_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The actual package count applicable to this special service. "
        },
        "IS_SYSTEM_GENERATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if this special service was created by the system. It allows logic to determine which special services to leave in place when re-syncing the shipment special services. "
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
        "SHIPMENT_SPECIAL_SERVICE_REF",
        "SHIPMENT_SPEC_SERVICE_REMARK",
        "SHIP_SPEC_SVC_SEC_CHARGE_JOIN"
      ]
    }
  }
};
