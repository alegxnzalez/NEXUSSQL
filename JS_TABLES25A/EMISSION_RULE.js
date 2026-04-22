// EMISSION_RULE.js

window.EMISSION_RULE = {
  "tables": {
    "EMISSION_RULE": {
      "columns": {
        "EMISSION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The globally unique ID of an emission rule. "
        },
        "EMISSION_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The unique ID of an emission activity specific to a domain. "
        },
        "EMISSION_RULE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The name of the emission rule. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the emission rule. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "This flag determines whether the emission rule is active or not. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The effective date of the emission rule. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date of the emission rule. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Mode profile for which the emission rule is defined. "
        },
        "FROM_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The region from which the shipment is started. "
        },
        "TO_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The region from which the shipment is reached. "
        },
        "PRIORITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The lower the priority, the higher the preference for the given emission rule.  So 1 is the highest priority. "
        },
        "EMIS_RULE_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "Constraint set which used to pick the emission factor based on the additional attributes "
        },
        "ACT_FORMULA_EXPRES_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_FORMULA_EXPRESSION",
          "info": "Formula Expression for calculating the emission at emission activity level. "
        },
        "ACT_D_FORMULA_EXPRES_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_FORMULA_EXPRESSION",
          "info": "Formula Expression for calculating the emission at emission activity detail level."
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
      "fk_tables": [
        "EMISSION_FACTOR"
      ]
    }
  }
};
