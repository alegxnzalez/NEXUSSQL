// INT_SAVED_QUERY.js

window.INT_SAVED_QUERY = {
  "tables": {
    "INT_SAVED_QUERY": {
      "columns": {
        "INT_SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This is the integration saved query gid. "
        },
        "INT_SAVED_QUERY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This is the integration saved query xid. "
        },
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "info": "This is the name of the query. "
        },
        "SQL_FIND": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "This is the sql  query statement."
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
