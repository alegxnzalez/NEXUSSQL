// SELECT_LIST_D.js

window.SELECT_LIST_D = {
  "tables": {
    "SELECT_LIST_D": {
      "columns": {
        "SELECT_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SELECT_LIST",
          "info": "Reference to parent select list "
        },
        "SEQNO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number starting with 1 within each select list "
        },
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "A gc3 table name "
        },
        "S_ROWID": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "An oracle rowid referencing an existing row within a gc3 table"
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
