// IE_INROUTE_SERVPROV.js

window.IE_INROUTE_SERVPROV = {
  "tables": {
    "IE_INROUTE_SERVPROV": {
      "columns": {
        "I_REC_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": true
        },
        "INROUTE_SERVPROV_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_ALIAS_QUAL",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "INROUTE_TRANSPORTATION_METHOD": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted.  The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly).  Valid values are 1-4."
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
