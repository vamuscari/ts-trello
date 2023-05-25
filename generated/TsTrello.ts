/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { ActionsService } from './services/ActionsService';
import { ApplicationsService } from './services/ApplicationsService';
import { BatchService } from './services/BatchService';
import { BoardsService } from './services/BoardsService';
import { CardsService } from './services/CardsService';
import { ChecklistsService } from './services/ChecklistsService';
import { CustomFieldsService } from './services/CustomFieldsService';
import { EmojiService } from './services/EmojiService';
import { EnterprisesService } from './services/EnterprisesService';
import { LabelsService } from './services/LabelsService';
import { ListsService } from './services/ListsService';
import { MembersService } from './services/MembersService';
import { NotificationsService } from './services/NotificationsService';
import { OrganizationsService } from './services/OrganizationsService';
import { PluginsService } from './services/PluginsService';
import { SearchService } from './services/SearchService';
import { TokensService } from './services/TokensService';
import { WebhooksService } from './services/WebhooksService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class TsTrello {

    public readonly actions: ActionsService;
    public readonly applications: ApplicationsService;
    public readonly batch: BatchService;
    public readonly boards: BoardsService;
    public readonly cards: CardsService;
    public readonly checklists: ChecklistsService;
    public readonly customFields: CustomFieldsService;
    public readonly emoji: EmojiService;
    public readonly enterprises: EnterprisesService;
    public readonly labels: LabelsService;
    public readonly lists: ListsService;
    public readonly members: MembersService;
    public readonly notifications: NotificationsService;
    public readonly organizations: OrganizationsService;
    public readonly plugins: PluginsService;
    public readonly search: SearchService;
    public readonly tokens: TokensService;
    public readonly webhooks: WebhooksService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.trello.com/1',
            VERSION: config?.VERSION ?? '0.0.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.actions = new ActionsService(this.request);
        this.applications = new ApplicationsService(this.request);
        this.batch = new BatchService(this.request);
        this.boards = new BoardsService(this.request);
        this.cards = new CardsService(this.request);
        this.checklists = new ChecklistsService(this.request);
        this.customFields = new CustomFieldsService(this.request);
        this.emoji = new EmojiService(this.request);
        this.enterprises = new EnterprisesService(this.request);
        this.labels = new LabelsService(this.request);
        this.lists = new ListsService(this.request);
        this.members = new MembersService(this.request);
        this.notifications = new NotificationsService(this.request);
        this.organizations = new OrganizationsService(this.request);
        this.plugins = new PluginsService(this.request);
        this.search = new SearchService(this.request);
        this.tokens = new TokensService(this.request);
        this.webhooks = new WebhooksService(this.request);
    }
}

