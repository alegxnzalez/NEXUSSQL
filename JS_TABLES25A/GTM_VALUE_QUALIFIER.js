// GTM_VALUE_QUALIFIER.js

window.GTM_VALUE_QUALIFIER = {
  "tables": {
    "GTM_VALUE_QUALIFIER": {
      "columns": {
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
        },
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Value Qualifier ID "
        },
        "GTM_VALUE_QUALIFIER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Value Qualifier ID "
        },
        "GTM_VALUE_QUALIFIER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Value Qualifier Name "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Value Qualifier Description "
        },
        "GTM_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_VALUE_TYPE",
          "info": "Value Type ID "
        },
        "GTM_VALUE_QUALIFIER_CLASS": {
          "type": "VARCHAR2(25)",
          "nullable": true,
          "values": [
            "TOTAL VALUE",
            "COST",
            "DUTY",
            "TAX",
            "PER UNIT VALUE",
            "RVC"
          ],
          "info": "It will use to define the different value representation like total value, cost, duties,per unit value and taxes etc... of value qualifier. "
        },
        "IS_MANDATORY_INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "This field is used by the landed cost adhoc screen to indicate if a value qualifier is mandatory or not "
        },
        "VISIBLE_ON_SIMULATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "I",
            "O",
            "B",
            "N"
          ],
          "info": "This field is used to render the value qualifier in the landed cost simulator adhoc screen"
        }
      },
      "fk_tables": [
        "GTM_BASE_AMOUNT_TYPE",
        "GTM_BASE_AMOUNT_TYPE_DETAIL",
        "GTM_CA_LINE_VALUE",
        "GTM_COMP_RULE_VALUE",
        "GTM_LICENSE_CODE_OPTION",
        "GTM_LICENSE_LINE",
        "GTM_LICENSE_LINE_VALUE",
        "GTM_REGISTRATION_VALUE",
        "GTM_RULE_RESTRICTION",
        "GTM_STRUCTURE_VALUE",
        "GTM_STR_COMPONENT_CURRENCY",
        "GTM_TIP_INVENTORY_VALUE",
        "GTM_TIP_INV_MOVEMENT_VALUE",
        "GTM_TIP_VALUE_CALC_DETAIL",
        "GTM_TRANSACTION_VALUE",
        "GTM_TRANS_LINE_LICENSE",
        "GTM_TRANS_LINE_QF_VALUE",
        "GTM_TRANS_LINE_VALUE",
        "GTM_VALUE_SET_D",
        "ITEM_ORIGIN_VALUE",
        "ITEM_QF_VALUE",
        "ITEM_VALUE"
      ]
    }
  }
};
