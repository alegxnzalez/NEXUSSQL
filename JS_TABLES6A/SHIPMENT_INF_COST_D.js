// SHIPMENT_INF_COST_D.js

window.SHIPMENT_INF_COST_D = {
  "tables": {
    "SHIPMENT_INF_COST_D": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_INF_COST",
          "info": "The GID for the shipment. "
        },
        "SHIPMENT_INF_COST_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_INF_COST",
          "info": "The shipment informational cost sequence (key). "
        },
        "DETAIL_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The detail sequence number (key). "
        },
        "COST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "B",
            "A",
            "O",
            "D",
            "S",
            "C"
          ],
          "info": "The cost type for this shipment cost record. "
        },
        "COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The cost value. Examples are base and accessorial. "
        },
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The cost currency GID. "
        },
        "COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The cost in the base currency. "
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The accessorial code identifier associated to the cost record if it was calculated from the rate accessorial. "
        },
        "ACCESSORIAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_COST",
          "info": "The accessorial cost identifier associated to the cost record if it was calculated from the rate accessorial. "
        },
        "RATE_GEO_COST_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The rate detail cost group identifier that was used in calculating this cost value. "
        },
        "RATE_GEO_COST_SEQ": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The rate detail cost sequence that was used in calculating this cost value. "
        },
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The special service identifier associated to the cost record if it was calculated from a special service. "
        },
        "IS_COST_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator defining the cost element as permanent and not to recalculate it based on shipment modifications. "
        },
        "PROCESS_AS_FLOW_THRU": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator defining the cost element as a flow through cost when sent to the financial systems. "
        },
        "ADJUSTMENT_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ADJUSTMENT_REASON",
          "info": "An adjustment reason code GID  that categorizes the cost element as an adjustment and the type. "
        },
        "GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "The general ledger GID associated with the cost element and sent to financial systems. "
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
