// BUYER_TEMPLATE.js

window.BUYER_TEMPLATE = {
  "tables": {
    "BUYER_TEMPLATE": {
      "description": "It is a buy template with transport mode, move perspective and order release template info.",
      "columns": {
        "BUYER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BUYER",
          "info": "Along with buy_template_seq is the primary key of this table."
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE"
},
        "MOVE_PERSPECTIVE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MOVE_PERSPECTIVE"
},
        "ORDER_RELEASE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "It is order_release_gid which has is_template='Y' in order_release table."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Define if this template is active or inactive."
},
        "BUY_TEMPLATE_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number with buyer_gid will be the primary key of this table"
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