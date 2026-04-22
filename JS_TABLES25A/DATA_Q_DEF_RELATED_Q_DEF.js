// DATA_Q_DEF_RELATED_Q_DEF.js

window.DATA_Q_DEF_RELATED_Q_DEF = {
  "tables": {
    "DATA_Q_DEF_RELATED_Q_DEF": {
      "columns": {
        "DATA_QUEUE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUEUE_DEF",
          "info": "Parent data queue "
        },
        "RELATED_QUEUE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUEUE_DEF",
          "info": "Child data queue (i.e. a data queue populated by the parent's executor)"
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
