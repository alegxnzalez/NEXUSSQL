// AUTO_APPROVE_RULE.js

window.AUTO_APPROVE_RULE = {
  "tables": {
    "AUTO_APPROVE_RULE": {
      "columns": {
        "AUTO_APPROVE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "AUTO_APPROVE_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DEFAULT_COST_PERCENT_ABOVE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEFAULT_COST_PERCENT_BELOW": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEFAULT_WEIGHT_PERCENT_ABOVE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEFAULT_WEIGHT_PERCENT_BELOW": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEF_COST_ABOVE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The default cost an invoice may be above the shipment cost for auto approve.  The lesser of this amount, if specified, and the amount calculated by the default cost percent above will be used. "
        },
        "DEF_COST_ABOVE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "DEF_COST_ABOVE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEF_COST_BELOW": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The default cost an invoice may be below the shipment cost for auto approve.  The lesser of this amount, if specified, and the amount calculated by the default cost percent below will be used. "
        },
        "DEF_COST_BELOW_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "DEF_COST_BELOW_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEF_WEIGHT_ABOVE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The default weight an invoice may be above the shipment weight for auto approve.  The lesser of this amount, if specified, and the amount calculated by the default weight percent above will be used. "
        },
        "DEF_WEIGHT_ABOVE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DEF_WEIGHT_ABOVE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEF_WEIGHT_BELOW": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The default weight an invoice may be below the shipment weight for auto approve.  The lesser of this amount, if specified, and the amount calculated by the default weight percent below will be used. "
        },
        "DEF_WEIGHT_BELOW_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DEF_WEIGHT_BELOW_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "APPLY_COST_RULE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "APPLY_WEIGHT_RULE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "RULE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "CONSOLIDATED",
            "NON-CONSOLIDATED",
            "BOTH"
          ]
        },
        "APPROVE_PASS_THROUGH_INV": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Added to allow establishing amount tolerance limits by Transport Mode "
        },
        "MAX_AMT_OVER_INVOICE_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "To support exisitng data for this field "
        },
        "MAX_AMT_OVER_INV_COST_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "MAX_AMT_OVER_INVOICE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
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
        },
        "APPLY_DEVIATION_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "DEF_DEVIATION_COST_BELOW": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEF_DEVIATION_COST_BELOW_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEF_DEV_COST_BELOW_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DEF_DEVIATION_COST_ABOVE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEF_DEVIATION_COST_ABOVE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEF_DEV_COST_ABOVE_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DEF_DEVIATION_AGG_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DEF_DEVIATION_PERCENT_ABOVE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEF_DEVIATION_PERCENT_BELOW": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Effective Date for this Auto Approval Rule. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Expiration Date for this Auto Approval Rule. "
        },
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "Auto Approval Rule criteria for matching involved party qualifier on invoice "
        },
        "CONTACT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT_PROFILE",
          "info": "Auto Approval Rule criteria for matching the involved party contact for invoice."
        }
      },
      "fk_tables": [
        "AUTO_APPROVE_RULE_DETAIL",
        "AUTO_APPROVE_RULE_PROFILE_D"
      ]
    }
  }
};
