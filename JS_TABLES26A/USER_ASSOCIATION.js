// USER_ASSOCIATION.js

window.USER_ASSOCIATION = {
  "tables": {
    "USER_ASSOCIATION": {
      "description": "The USER_ASSOCIATION table specifies the data that service providers can see, allowing them access only to their data. GC3 has a concept of SERVPROV user class that groups all the service providers. A SERVPROV in the USER_ASSOCIATION_QUAL denotes that the GL_USER_GID is a service provider. The service provider's name is listed in the USER_ASSOCIATION_VALUE. For e.g., MSCARRIERS etc.",
      "columns": {
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_USER",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "USER_ASSOCIATION_QUAL": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
},
        "USER_ASSOCIATION_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
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