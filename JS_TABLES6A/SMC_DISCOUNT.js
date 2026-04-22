// SMC_DISCOUNT.js

window.SMC_DISCOUNT = {
  "tables": {
    "SMC_DISCOUNT": {
      "columns": {
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_OFFERING",
          "info": "The GID for the  rate offering related to the SMC discount as table of values. "
        },
        "MIN_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent for minimum cost. "
        },
        "L5C_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent discount for weights <= 500 lb. "
        },
        "M5C_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent discount for weight > 500 lb. "
        },
        "M1M_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent discount for weight > 1000 lb. "
        },
        "M2M_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent discount for weight > 2000 lb. "
        },
        "M5M_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent discount for weight > 5000 lb. "
        },
        "M10M_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent discount for weight > 10,000 lb. "
        },
        "M20M_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent discount for weight > 20,000 lb. "
        },
        "M30M_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent discount for weight > 30,000 lb. "
        },
        "M40M_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent discount for weight > 40,000 lb. "
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
        "SMC_DISC_SEQ_NUM": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "An internal sequence number for the different SMC discount entries provided by movement type. "
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The GID for the  rate record related to the SMC discount as table of values. "
        },
        "STOP_ALTERNATION_BREAK": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Specifies the weight break where the deficit rating should stop. "
        },
        "MOVEMENT_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Qualifies the usage of the discounts defined by SMC/Carrier Connect Movement Type.\nIf null, then the discounts provided (by weight break) apply to all Movement Types.  Otherwise - the discounts defined apply to the specified Movement Type - either Direct, Indirect, Partner or Custom."
        }
      },
      "fk_tables": []
    }
  }
};
