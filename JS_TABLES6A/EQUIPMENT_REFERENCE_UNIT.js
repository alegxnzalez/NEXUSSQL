// EQUIPMENT_REFERENCE_UNIT.js

window.EQUIPMENT_REFERENCE_UNIT = {
  "tables": {
    "EQUIPMENT_REFERENCE_UNIT": {
      "columns": {
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "EQUIPMENT_REFERENCE_UNIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "EQUIPMENT_REFERENCE_UNIT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
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
        "APPLICATION_RULE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "SAME",
            "LIKE",
            "MIXED"
          ]
        }
      },
      "fk_tables": [
        "EQUIP_GROUP_EQUIP_REF_UNIT",
        "OBL_EQUIP_REF_UNIT_JOIN",
        "OBSU_EQUIP_REF_UNIT_JOIN",
        "ORL_EQUIP_REF_UNIT_JOIN",
        "PKG_ITEM_EQUIP_REF_UNIT_JOIN",
        "SHIPMENT",
        "SHIPMENT_ORDER_RELEASE_JOIN",
        "SHIP_UNIT_EQUIP_REF_UNIT_JOIN",
        "THU_EQUIP_REF_UNIT"
      ]
    }
  }
};
