// AUTO_APPROVE_RULE_DETAIL.js

window.AUTO_APPROVE_RULE_DETAIL = {
  "tables": {
    "AUTO_APPROVE_RULE_DETAIL": {
      "columns": {
        "SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true
        },
        "AUTO_APPROVE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_APPROVE_RULE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "TYPE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "C",
            "W"
          ]
        },
        "ALLOWABLE_PERCENT_ABOVE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ALLOWABLE_PERCENT_BELOW": {
          "type": "NUMBER()",
          "nullable": true
        },
        "APPROVE_TO_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "APPROVE_TO_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "APPROVE_TO_AMOUNT in base units. "
        },
        "APPROVE_TO_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "APPROVE_TO_WEIGHT": {
          "type": "NUMBER(8)",
          "nullable": true
        },
        "APPROVE_TO_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "APPROVE_TO_WEIGHT in base units. "
        },
        "APPROVE_TO_UOM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ALLOW_CURR_ABOVE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The currency amount an invoice may be above the shipment cost for auto approve for the given range.  The lesser of this amount, if specified, and the amount calculated by the cost percent above will be used. "
        },
        "ALLOW_CURR_ABOVE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "ALLOW_CURR_ABOVE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ALLOW_CURR_BELOW": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The cuurency amount an invoice may be below the shipment cost for auto approve for the given range.  The lesser of this amount, if specified, and the amount calculated by the cost percent below will be used. "
        },
        "ALLOW_CURR_BELOW_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "ALLOW_CURR_BELOW_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ALLOW_WEIGHT_ABOVE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight an invoice may be above the shipment weight for auto approve for the given range.  The lesser of this amount, if specified, and the weight calculated by the weight percent above will be used. "
        },
        "ALLOW_WEIGHT_ABOVE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ALLOW_WEIGHT_ABOVE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ALLOW_WEIGHT_BELOW": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight an invoice may be below the shipment weight for auto approve for the given range.  The lesser of this amount, if specified, and the weight calculated by the weight percent below will be used."
        },
        "ALLOW_WEIGHT_BELOW_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ALLOW_WEIGHT_BELOW_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
