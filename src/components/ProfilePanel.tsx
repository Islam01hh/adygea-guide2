import { Sight, Favorite, UserProfile } from "../types";
import { Heart, Trash2, MapPin, ExternalLink, Calendar, ShieldAlert } from "lucide-react";

interface ProfilePanelProps {
  currentUser: UserProfile;
  favorites: Favorite[];
  sights: Sight[];
  onRemoveFavorite: (sightId: string) => Promise<void>;
  onSelectSight: (sight: Sight) => void;
  onLogout: () => void;
}

export default function ProfilePanel({
  currentUser,
  favorites,
  sights,
  onRemoveFavorite,
  onSelectSight,
  onLogout,
}: ProfilePanelProps) {
  // Map favorite entities to proper sight object structures
  const resolvedFavorites: Sight[] = favorites
    .map(fav => sights.find(s => s.id === fav.sightId))
    .filter((s): s is Sight => s !== undefined);

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6 text-left" id="user_profile_cabinet_root">
      {/* HEADER SECTION */}
      <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={currentUser.photoURL}
            alt={currentUser.displayName}
            className="w-14 h-14 rounded-full border-2 border-teal-500 object-cover shadow-md"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <h2 className="font-display font-black text-lg md:text-xl text-slate-800 tracking-tight leading-none">
                {currentUser.displayName}
              </h2>
              <span className="text-[9px] bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-slate-500 uppercase font-mono font-bold tracking-wide">
                {currentUser.role}
              </span>
            </div>
            <p className="text-slate-450 font-mono text-xs">{currentUser.email}</p>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-50 hover:bg-red-100 rounded-xl text-red-650 hover:text-red-800 font-bold text-xs transition border border-red-100 max-w-max"
          id="btn_cabinet_logout"
        >
          Выйти из кабинета
        </button>
      </div>

      {/* BODY SECTION: STATS SUMMARY GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block font-bold">Любимые места</span>
          <span className="text-3xl font-black text-slate-800 font-display block mt-1">{resolvedFavorites.length}</span>
          <span className="text-[10px] text-slate-500 block leading-normal font-light">сохранено в профиле</span>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block font-bold">Статус учетной записи</span>
          <span className="text-sm font-bold text-teal-700 bg-teal-50 border border-teal-100 rounded px-1.5 py-0.5 block mt-2 text-center max-w-max uppercase font-mono">
            Активна
          </span>
          <span className="text-[10px] text-slate-550 block pt-1.5 font-light">Доступна синхронизация</span>
        </div>
      </div>

      {/* FAVORITES VIEW SECTION */}
      <div className="space-y-4">
        <div className="border-b border-slate-100 pb-2">
          <h3 className="font-display font-bold text-slate-800 text-sm md:text-base flex items-center gap-1.5">
            <Heart className="w-4.5 h-4.5 text-red-500 fill-current" />
            <span>Ваше Избранное</span>
          </h3>
          <p className="text-slate-500 text-xs">
            Ваш персональный список направлений в Республике Адыгея для скорого посещения.
          </p>
        </div>

        {resolvedFavorites.length === 0 ? (
          <div className="p-10 text-center text-slate-400 text-xs bg-slate-50 border border-slate-100 rounded-2xl">
            В вашем Избранном пока пусто. Кликните по иконке в виде сердечка на любой карточке или в деталях места, чтобы добавить его сюда!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resolvedFavorites.map((sight) => (
              <div key={sight.id} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex hover:shadow transition group" id={`cabinet_fav_card_${sight.id}`}>
                {/* Photo shrink-0 column */}
                <div className="w-24 sm:w-28 relative shrink-0">
                  <img
                    src={sight.image}
                    alt={sight.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info and action description column */}
                <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 font-mono">
                        {sight.category}
                      </span>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveFavorite(sight.id);
                        }}
                        className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                        title="Убрать из избранного"
                        id={`btn_cabinet_unfav_${sight.id}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="font-display font-black text-xs sm:text-sm text-slate-800 tracking-tight leading-tight line-clamp-1">
                      {sight.title}
                    </h4>

                    <p className="text-slate-550 text-[11px] font-light leading-normal line-clamp-2">
                      {sight.shortDescription}
                    </p>
                  </div>

                  <div className="border-t border-slate-200/50 pt-2 flex items-center justify-between text-[10px]">
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {sight.location.split(',')[0]}
                    </span>

                    <button
                      onClick={() => onSelectSight(sight)}
                      className="px-2.5 py-1 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-200 text-teal-600 rounded-lg transition inline-flex items-center gap-1 shadow-sm font-bold"
                      id={`btn_cabinet_go_${sight.id}`}
                    >
                      <span>Открыть</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
