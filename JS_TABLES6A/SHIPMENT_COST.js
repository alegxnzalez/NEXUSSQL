// SHIPMENT_COST.js

window.SHIPMENT_COST = {
  "tables": {
    "SHIPMENT_COST": {
      "columns": {
        "SHIPMENT_COST_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A system-generated unique sequence number to define the shipment costs. "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT",
          "info": "The GID for the container group. "
        },
        "COST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "foreign_key": "COST_TYPE",
          "info": "C, A, B "
        },
        "COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The cost as it relegates to the cost type for the shipment. "
        },
        "COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The cost GID. "
        },
        "COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The cost in base units. "
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The accessorial code GID associated with the shipment cost. "
        },
        "ACCESSORIAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_COST",
          "info": "The accessorial cost GID associated with the shipment cost. "
        },
        "BILLABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BILLABLE_INDICATOR",
          "info": "Indicates the billable status of this shipment cost (sell shipment only). "
        },
        "RATE_GEO_COST_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The rate detail cost group GID associated with the shipment cost. "
        },
        "RATE_GEO_COST_SEQ": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The rate detail cost sequence identifier associated with the shipment cost. "
        },
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The special service GID associated with the shipment cost. "
        },
        "IS_COST_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates shipment cost is a fixed cost. "
        },
        "PROCESS_AS_FLOW_THRU": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The override for a record to be copied to the sell side during rating. "
        },
        "ADJUSTMENT_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ADJUSTMENT_REASON",
          "info": "The reason why this cost was added. "
        },
        "GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "The GL code for the shipment cost record. "
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The payment method code for the shipment cost. "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date to be used for any currency conversions; if null, the latest conversion is used. "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "The set of exchange rates to use for currency conversions; if null, the default set is used. "
        },
        "COST_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for cost. "
        },
        "COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The functional amount currency GID. "
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Points to the ship unit (if any) associated with this shipment cost, as a package. "
        },
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Points to the ship unit line (if any) associated with this shipment cost, as a package. "
        },
        "IS_WEIGHTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether or not the cost affects the total weighted cost of the shipment only. "
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
        "COST_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COST_CATEGORY",
          "info": "The Cost Category Identifier associated with the Shipment Cost "
        },
        "TRACKING_NUMBER": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "Denotes the tracking number associated with a specific charge/cost."
        }
      },
      "fk_tables": [
        "SHIPMENT_COST_DETAIL",
        "SHIPMENT_COST_REF",
        "SHIPMENT_COST_REMARK"
      ]
    }
  }
};
