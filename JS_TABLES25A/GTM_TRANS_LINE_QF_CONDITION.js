// GTM_TRANS_LINE_QF_CONDITION.js

window.GTM_TRANS_LINE_QF_CONDITION = {
  "tables": {
    "GTM_TRANS_LINE_QF_CONDITION": {
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
        "GTM_TRANS_LINE_QF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_LINE_QF",
          "info": "Unique identifier of transaction line qualification "
        },
        "SEQ_NUMBER": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number of the transaction line qualification condition. "
        },
        "CONDITION_SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The short name given to rules of origin rule code. "
        },
        "CONDITION_DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description field. "
        },
        "IS_APPLIED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the condition applied"
        }
      },
      "fk_tables": []
    }
  }
};
