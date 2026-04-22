// DOMAIN_SETTING.js

window.DOMAIN_SETTING = {
  "tables": {
    "DOMAIN_SETTING": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PLANNING_PARAMETER_SET"
        },
        "POSTAL_CODE_VALIDATE_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "NONE",
            "ERROR",
            "WARNING"
          ]
        },
        "CONDITIONAL_BOOKING_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONDITIONAL_BOOKING_PROFILE"
        },
        "COMP_ENG_THRESHOLD_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "THRESHOLD_PROFILE"
        },
        "COND_BOOK_THRESHOLD_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "THRESHOLD_PROFILE"
        },
        "ITL_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "ITL Profile associated with the domain "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "effective date "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "expiration date "
        },
        "BUYER_TEMPLATE_COPY_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "Dont Copy",
            "Copy if Null",
            "Replace"
          ],
          "info": "Buyer template copy type. "
        },
        "PERCENT_MARKUP_ABOVE_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AMOUNT_MARKUP_ABOVE_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PERFORM_MARKUP_CHECK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "AMOUNT_MARKUP_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "AMOUNT_MARKUP_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CUSTOMER_TEMPLATE_COPY_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "Dont Copy",
            "Copy if Null",
            "Replace"
          ]
        },
        "FROM_ADDR_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "Configurable 'From-Address' contact details. "
        },
        "FUNCTIONAL_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "functional currency for objects in this domain, if null, functional currency is not used "
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
        "USE_PPS_ON_SHIPMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "Use the Planning Parameter Set on the shipment for all shipment actions"
        }
      },
      "fk_tables": [
        "BUSINESS_OBJECT_TEMPLATE",
        "DOMAIN_REMARK"
      ]
    }
  }
};
