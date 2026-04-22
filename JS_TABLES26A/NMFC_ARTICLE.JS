// NMFC_ARTICLE.js

window.NMFC_ARTICLE = {
  "tables": {
    "NMFC_ARTICLE": {
      "description": "This table defines the NMFC governmental name and number if the item is an NMFC article.",
      "columns": {
        "NMFC_ARTICLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "NMFC_ARTICLE_GID contains the unique identifier for the National Motor Freight Classification (NMFC) article for the item being shipped."
},
        "NMFC_ARTICLE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "NMFC_ARTICLE_XID contains the unique external identifier for the National Motor Freight Classification (NMFC) article."
},
        "NMFC_ARTICLE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "NMFC_ARTICLE_NAME contains the name of the National Motor Freight Classification (NMFC) article."
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
      "fk_tables": [
        "ITEM",
        "NMFC_ARTICLE_CLASS_MAP"
]
    }
  }
};