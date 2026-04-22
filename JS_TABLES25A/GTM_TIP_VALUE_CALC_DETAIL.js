// GTM_TIP_VALUE_CALC_DETAIL.js

window.GTM_TIP_VALUE_CALC_DETAIL = {
  "tables": {
    "GTM_TIP_VALUE_CALC_DETAIL": {
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
        "GTM_TIP_VALUE_CALCULATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_VALUE_CALCULATION",
          "info": "Trade Incentive Program Value Calculation GID "
        },
        "SEQUENCE_NUMBER": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number "
        },
        "TARGET_OBJECT": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Target Object, under which the result of Value Calculation will be persisted. "
        },
        "TARGET_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The Value Qualifier GID on the target object, for which the result of Value calculation will be persisted. "
        },
        "VALUE_OPERATION": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
            "INCREASE",
            "DECREASE"
          ],
          "info": "Value Operation. Can be either Increase or Decrease. "
        },
        "SOURCE_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The Value Qualifier GID of the source, which will be used as a factor in the calculation. "
        },
        "GTM_TIP_RATE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TIP_RATE_TYPE",
          "info": "GID of GTM Trade Incentive Program Rate Type."
        }
      },
      "fk_tables": []
    }
  }
};
