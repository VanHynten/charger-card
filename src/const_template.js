/** TEMPLATE */

export const MAIN_ENTITY_BASE = '_status';  //Defines what should be replaced from main entity name to use as template for other entities
export const DEFAULT_CONFIG = {             //To override card config when template selected
    show_leds: true,
}

export const DEFAULT_DETAILS = {
    // TEMPLATE

    // template: [{
    //     entity_id: '',                  // entity id
    //     attribute: '',                  // attribute is used as value if specified
    //     unit: '',                       // unit if you want to override entity unit
    //     unit_show: true,                // show unit next to value
    //     unit_showontext: true,          // show unit next to value in tooltip text
    //     text: '',                       // text to be used instead of entity friendly-name (do not use dots '.' and apply translation key to achieve translation)
    //     service: '',                    // service on format 'domain.service'
    //     service_data: {'test','test'},  // service data for the service call
    //     icon: '',                       // icon to be used instead of entity icon
    //     round: 0,                       // round to specified number of decimals (integer)
    //     type: '',                       // type
    //     calc_function: ''               // define entity_id as 'calculated' and specify min,max,mean,sum here to calculate
    //     calc_entities: ''               // entities to calculate from above feature
    //     conditional_entity: ''          // if you want the entity_id to be shown conditionally, specify a on/off or true/false sensor here
    //     conditional_attribute: ''       // if you prefer the conditional showing of entity to be based on an attribute, define it here
    //     conditional_invert: ''          // if you prefer to invert the conditional showing of an entity to show when false, invert by true

    //NAME, LOCATION, STATUS ETC
    name: {
        entity_id: 'sensor.#ENTITYPREFIX#_status',
        attribute: 'name',
    },
    location: {
        entity_id: 'sensor.#ENTITYPREFIX#_status',
        attribute: 'site_name',
    },
    status: {
        entity_id: 'sensor.#ENTITYPREFIX#_status',
    },
    substatus: {
        entity_id: 'sensor.#ENTITYPREFIX#_reason_for_no_current',
    },
    smartcharging: {
        //controls white or blue leds
        entity_id: 'switch.#ENTITYPREFIX#_smart_charging',
    },

    // OVERRIDE CURRENTLIMITS
    currentlimits: [0, 6, 10, 16, 20, 25, 32],

    // OVERRIDE STATE TEXT - also overrides translation
    statetext: {
        disconnected: 'disconnected',
        awaiting_start: 'awaiting_start',
        charging: 'charging',
        completed: 'completed',
        error: 'error',
        ready_to_charge: 'ready_to_charge',
    },

    // OVERRIDE COLLAPSIBLE BUTTON ICONS AND TOOLTIP TEXT
    collapsiblebuttons: {
            group1: { text: 'click_for_group1', icon: 'mdi:speedometer' },
            group2: { text: 'click_for_group2', icon: 'mdi:information' },
            group3: { text: 'click_for_group3', icon: 'mdi:cog' },
        },

    //ICONS LEFT AND RIGHT
    info_left: [
        {
        entity_id: 'binary_sensor.#ENTITYPREFIX#_online',
        text: 'online'
        }
    ],
    info_right: [
        {
        entity_id: 'sensor.#ENTITYPREFIX#_voltage',
        text: 'voltage'
        },{
        entity_id: 'sensor.#ENTITYPREFIX#_power',
        text: 'power'
        }
    ],

    //LIMITS
    group1: [
        {
            entity_id: 'sensor.#ENTITYPREFIX#_dynamic_charger_limit',
            text: 'dyn_charger_limit',
            service: 'persistent_notification.create',
            service_data: {message: 'Trying to set current limit: #SERVICEVAL#A!', title: 'Limit'},
        },
        {
            entity_id: 'sensor.#ENTITYPREFIX#_dynamic_circuit_limit',
            text: 'dyn_circuit_limit'
        },{
            entity_id: 'sensor.#ENTITYPREFIX#_max_charger_limit',
            text: 'max_charger_limit'
        },{
            entity_id: 'sensor.#ENTITYPREFIX#_max_circuit_limit',
            text: 'max_circuit_limit'
        },{
            entity_id: 'sensor.#ENTITYPREFIX#_offline_circuit_limit',
            text: 'offline_circuit_limit'
        },
    ],

    //INFO
    group2: [
        {
            entity_id: 'binary_sensor.#ENTITYPREFIX#_online',
            text: 'online'
        },
        {
            entity_id: 'sensor.#ENTITYPREFIX#_voltage',
            text: 'voltage'
        },
        {
            entity_id: 'sensor.#ENTITYPREFIX#_power',
            text: 'power'
        },
        {
            entity_id: 'sensor.#ENTITYPREFIX#_current',
            text: 'charger_current'
        },
        {
            entity_id: 'sensor.#ENTITYPREFIX#_circuit_current',
            text: 'circuit_current'
        },
        {
            entity_id: 'sensor.#ENTITYPREFIX#_energy_per_hour',
            text: 'energy_per_hour'
        },
        {
            entity_id: 'sensor.#ENTITYPREFIX#_session_energy',
            text: 'session_energy'
        },
        {
            entity_id: 'sensor.#ENTITYPREFIX#_lifetime_energy',
            text: 'lifetime_energy'
        },
    ],

    //CONFIG
    group3: [
        {
            entity_id: 'switch.#ENTITYPREFIX#_is_enabled',
            text: 'enabled'
        },
        {
            entity_id: 'switch.#ENTITYPREFIX#_enable_idle_current',
            text: 'idle_current'
        },
        {
            entity_id: 'binary_sensor.#ENTITYPREFIX#_cable_locked',
            text: 'cable_locked'
        },
        {
            entity_id: 'switch.#ENTITYPREFIX#_cable_locked_permanently',
            text: 'perm_cable_locked'
        },
        {
            entity_id: 'switch.#ENTITYPREFIX#_smart_charging',
            text: 'smart_charging'
        },
        {
            entity_id: 'sensor.#ENTITYPREFIX#_cost_per_kwh',
            text: 'cost_per_kwh'
        },
        {
            entity_id: 'binary_sensor.#ENTITYPREFIX#_update_available',
            text: 'update_available'
        },
        {
            entity_id: 'binary_sensor.#ENTITYPREFIX#_basic_schedule',
            text: 'schedule'
        }
    ],

    //STATS - based on state of main entity, default if state not found
    stats: {

        default: [
            {
                entity_id: 'sensor.#ENTITYPREFIX#_session_energy',
                text: 'session_energy'
            },
            {
                entity_id: 'switch.#ENTITYPREFIX#_cable_locked_permanently',
                text: 'cable_locked'
            },
            {
                entity_id: 'binary_sensor.#ENTITYPREFIX#_basic_schedule',
                text: 'schedule'
            }
        ],

        disconnected: [
            {
                entity_id: 'sensor.#ENTITYPREFIX#_session_energy',
                text: 'session_energy'
            },
            {
                entity_id: 'switch.#ENTITYPREFIX#_cable_locked_permanently',
                text: 'cable_locked'
            },
            {
                entity_id: 'calculated',
                text: 'used_limit',
                unit: 'A',
                calc_function: 'min',
                calc_entities: [
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_dynamic_charger_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_dynamic_circuit_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_max_charger_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_max_circuit_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_offline_circuit_limit',
                    },
                ]
            }
        ],

        awaiting_start: [
            {
                entity_id: 'sensor.#ENTITYPREFIX#_session_energy',
                text: 'session_energy'
            },
            {
                entity_id: 'binary_sensor.#ENTITYPREFIX#_basic_schedule',
                text: 'schedule'
            },
            {
                entity_id: 'switch.#ENTITYPREFIX#_smart_charging',
                text: 'smart_charging'
            },
            {
                entity_id: 'calculated',
                text: 'used_limit',
                unit: 'A',
                calc_function: 'min',
                calc_entities: [
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_dynamic_charger_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_dynamic_circuit_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_max_charger_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_max_circuit_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_offline_circuit_limit',
                    },
                ]
            }
        ],

        charging: [
            {
                entity_id: 'sensor.#ENTITYPREFIX#_session_energy',
                text: 'session_energy'
            },
            {
                entity_id: 'sensor.#ENTITYPREFIX#_energy_per_hour',
                text: 'energy_per_hour'
            },
            {
                entity_id: 'sensor.#ENTITYPREFIX#_circuit_current',
                text: 'circuit_current'
            },
            {
                entity_id: 'sensor.#ENTITYPREFIX#_output_limit',
                text: 'output_limit'
            },
            {
                entity_id: 'sensor.#ENTITYPREFIX#_current',
                text: 'current'
            },
            {
                entity_id: 'sensor.#ENTITYPREFIX#_power',
                text: 'power'
            }
        ],

        completed: [
            {
                entity_id: 'sensor.#ENTITYPREFIX#_session_energy',
                text: 'session_energy'
            },
            {
                entity_id: 'binary_sensor.#ENTITYPREFIX#_basic_schedule',
                text: 'schedule'
            },
            {
                entity_id: 'calculated',
                text: 'used_limit',
                unit: 'A',
                calc_function: 'min',
                calc_entities: [
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_dynamic_charger_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_dynamic_circuit_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_max_charger_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_max_circuit_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_offline_circuit_limit',
                    },
                ]
            }
        ],

        error: [
            {
                entity_id: 'sensor.#ENTITYPREFIX#_session_energy',
                text: 'session_energy'
            },
            {
                entity_id: 'binary_sensor.#ENTITYPREFIX#_basic_schedule',
                text: 'schedule'
            }
        ],
        ready_to_charge: [
            {
                entity_id: 'sensor.#ENTITYPREFIX#_session_energy',
                text: 'session_energy'
            },
            {
                entity_id: 'binary_sensor.#ENTITYPREFIX#_basic_schedule',
                text: 'schedule'
            },
            {
                entity_id: 'calculated',
                text: 'used_limit',
                unit: 'A',
                calc_function: 'min',
                calc_entities: [
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_dynamic_charger_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_dynamic_circuit_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_max_charger_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_max_circuit_limit',
                    },
                    {
                        entity_id: 'sensor.#ENTITYPREFIX#_offline_circuit_limit',
                    },
                ]
            }
        ],
    },

    // TOOLBAR
    toolbar_left: {
        default: [
            {},
            ],

        disconnected: [
            {},
        ],

        awaiting_start: [
            {
                service: 'easee.stop',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'stop',
                icon: 'hass:stop',
            },
            {
                service: 'easee.resume',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'resume',
                icon: 'hass:play',
            },
            {
                service: 'easee.override_schedule',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'override',
                icon: 'hass:motion-play',
            },

        ],

        charging: [
            {
                service: 'easee.stop',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'stop',
                icon: 'hass:stop',
            },
            {
                service: 'easee.pause',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'pause',
                icon: 'hass:pause',
            },
        ],

        completed: [
            {
                service: 'easee.stop',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'stop',
                icon: 'hass:stop',
            },
            {
                service: 'easee.override_schedule',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'override',
                icon: 'hass:motion-play',
            },
        ],

        error: [
            {
                service: 'easee.reboot',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'reboot',
                icon: 'hass:restart',
            },
        ],
        ready_to_charge: [
            {
                service: 'easee.stop',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'stop',
                icon: 'hass:stop',
            },
            {
                service: 'easee.override_schedule',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'override',
                icon: 'hass:motion-play',
            },
        ],
    },
    toolbar_right: {
        default: [
            {
                service: 'persistent_notification.create',
                service_data: {message: 'Firmware update is available, but only possible when disconnected!', title: 'Update'},
                text: 'update',
                icon: 'mdi:file-download',
                conditional_entity: 'binary_sensor.#ENTITYPREFIX#_update_available',
            },
            ],

        disconnected: [
            {
                service: 'easee.update_firmware',
                service_data: {charger_id: '#SERVICEID#'},
                text: 'update',
                icon: 'mdi:file-download',
                conditional_entity: 'binary_sensor.#ENTITYPREFIX#_update_available',
            },
        ],
    },

};

