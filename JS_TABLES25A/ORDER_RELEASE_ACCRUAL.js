// ORDER_RELEASE_ACCRUAL.js

window.ORDER_RELEASE_ACCRUAL = {
  "tables": {
    "ORDER_RELEASE_ACCRUAL": {
      "columns": {
        "ORDER_RELEASE_ACCRUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for this accrual entry. "
        },
        "ORDER_RELEASE_ACCRUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for this accrual entry. "
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ORDER_RELEASE",
          "info": "The order release GID for which this accrual is related. "
        },
        "SENT_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Timestamp of when this accrual was sent from the system. Null means it has not been sent yet. "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The shipment GID associated to this accrual entry. "
        },
        "ACCRUED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the amount was accrued. "
        },
        "FREIGHT_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total current allocated freight costs. "
        },
        "FREIGHT_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The total freight cost currency. "
        },
        "FREIGHT_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total freight cost in the base currency. "
        },
        "FREIGHT_SENT_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total allocated freight cost already sent via the accrual interface. "
        },
        "FREIGHT_SENT_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The freight sent cost currency GID. "
        },
        "FREIGHT_SENT_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The freight cost in the base currency. "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "The exchange rate GID used for currency conversion calculation. "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The exchange rate date used for currency conversion calculation. "
        },
        "IS_REVERSAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A flag to determine whether the order release accrual is a reversal. "
        },
        "SHIPMENT_START_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The shipment start date used for exchange rate calculations. "
        },
        "FREIGHT_COST_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the freight cost. "
        },
        "FREIGHT_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The functional freight cost currency GID. "
        },
        "FREIGHT_SENT_C_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the freight sent cost. "
        },
        "FREIGHT_SENT_C_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The freight sent functional currency GID. "
        },
        "DELTA": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Delta or difference for the accrual calculated as: new amount - amount previously sent. "
        },
        "DELTA_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The delta currency GID. "
        },
        "DELTA_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The delta in the base currency. "
        },
        "DELTA_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for delta. "
        },
        "DELTA_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The functional currency for the delta currency identifier. "
        },
        "COST_TYPE_GID": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "foreign_key": "COST_TYPE",
          "info": "If line accruals are enabled, this will be populated with the cost type for the accrual line. "
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "If line accruals are enabled, this will be populated with the accessorial ID for the accrual line. "
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
