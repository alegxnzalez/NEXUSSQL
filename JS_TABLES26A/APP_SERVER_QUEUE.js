// APP_SERVER_QUEUE.js

window.APP_SERVER_QUEUE = {
  "tables": {
    "APP_SERVER_QUEUE": {
      "description": "Maps OAQ queues to application servers (i.e. clusters)",
      "columns": {
        "APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "APP_SERVER",
          "info": "Application server cluster"
},
        "INT_QUEUE_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "Oracle advanced queue name"
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