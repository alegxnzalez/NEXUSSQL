// SERVPROV_TENDER_COMMENT.js

window.SERVPROV_TENDER_COMMENT = {
  "tables": {
    "SERVPROV_TENDER_COMMENT": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SERVPROV"
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SERVPROV",
          "info": "added to identify the servprov who entered the comment "
        },
        "SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "SERVPROV_SHIPPER_QUAL": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "COMMENT_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "TENDER_COMMENT": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "RESPONSE_I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "in bound transaction no for tender response "
        },
        "IS_CONDITIONAL_BOOKING_REMARK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "mark the remark as conditional booking."
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
