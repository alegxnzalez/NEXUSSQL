// MAIL_SUPPRESSION.js

window.MAIL_SUPPRESSION = {
  "tables": {
    "MAIL_SUPPRESSION": {
      "columns": {
        "FROM_EMAIL": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "key_value": true,
          "info": "Mail sender. "
        },
        "TO_EMAIL": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "key_value": true,
          "info": "Mail recipient. "
        },
        "NUM_ADDRESS_FAILURES": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total number of e-mail address failures, since restart. "
        },
        "NUM_SUPPRESSIONS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total number of OCI email suppressions, since restart. "
        },
        "FIRST_ADDRESS_FAILURE_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of first mail address failure, since restart. "
        },
        "LAST_ADDRESS_FAILURE_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of last mail address failure. "
        },
        "NUM_NEW_ADDRESS_FAILURES": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total number of address failures, since last unsuppression attempt. "
        },
        "NUM_NEW_SUPPRESSIONS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total number of OCI mail suppressions, since last unsuppression attempt. "
        },
        "LAST_UNSUPPRESSION_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of last unsuppression attempt."
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
