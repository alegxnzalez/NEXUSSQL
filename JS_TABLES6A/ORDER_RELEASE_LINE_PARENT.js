// ORDER_RELEASE_LINE_PARENT.js

window.ORDER_RELEASE_LINE_PARENT = {
  "tables": {
    "ORDER_RELEASE_LINE_PARENT": {
      "columns": {
        "PARENT_ORL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "A unique identifier to define the multiple order release lines per order release. The gid has the domain portion. "
        },
        "CHILD_ORL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "A unique identifier to define the multiple order release lines per order release. The gid has the domain portion."
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
