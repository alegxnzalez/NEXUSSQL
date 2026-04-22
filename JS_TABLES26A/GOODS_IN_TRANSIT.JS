// GOODS_IN_TRANSIT.js

window.GOODS_IN_TRANSIT = {
  "tables": {
    "GOODS_IN_TRANSIT": {
      "description": "The goods_in_transit table indicates which packaged_items are currently in-transit between a given source and destination, and indicates the shipment(s) on which the items are moving.  This table is maintained behind-the-scenes via a database trigger on the shipment_status table.  Rows are added to the goods_in_transit table when a shipment'sgoods_in_transit status changes from from goods_in_transit_completed to goods_in_transit_in_transit.  Rows are deleted from the goods_in_transit table when a shipment'sgoods_in_transit status changes from goods_in_transit_in_transit to goods_in_transit_completed.  This table is queried by the visibility->inventory function.",
      "columns": {
        "SOURCE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "DEST": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "PACKAGED_ITEM_COUNT": {
          "type": "NUMBER",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};