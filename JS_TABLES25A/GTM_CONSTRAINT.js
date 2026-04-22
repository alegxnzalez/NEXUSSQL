// GTM_CONSTRAINT.js

window.GTM_CONSTRAINT = {
  "tables": {
    "GTM_CONSTRAINT": {
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
        "GTM_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "Indicates the Constraint Set within which the Constraint is defined. "
        },
        "GTM_CONSTRAINT_SET_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CSET_TYPE_C_TYPE_MAP",
          "info": "Indicates the Constraint Set Type of the Constraint Set within which the Constraint is defined "
        },
        "GTM_CONSTRAINT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CSET_TYPE_C_TYPE_MAP",
          "info": "Indicates the Constraint Type of the Constraint "
        },
        "LIST_CONDITIONAL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "O",
            "A"
          ],
          "info": "Indicates the match operator when there can be multiple qualifiers used to define the Constraint .                                Possible Values : O, A  .  'O' -oneOf  , 'A' - All                       This column is applicable only when the Constraint is of Qualifier types such as Refnum, Remark etc. "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
        }
      },
      "fk_tables": [
        "GTM_CONSTRAINT_D_LIST"
      ]
    }
  }
};
